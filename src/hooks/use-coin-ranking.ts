import { useEffect, useState } from "react";
import { ICoin, ICoinsResponse, IStats } from "../interfaces";
import coinRankingAPI from "../services/cryptoAPI";

const useCoinRanking = (count: number | void) => {
  const { data, isFetching } = coinRankingAPI.useGetCryptosQuery(count || 100);
  const [coinRankingData, setCoinRankingData] = useState<
    ICoinsResponse | undefined
  >();
  const [coins, setCoins] = useState<ICoin[]>();
  const [stats, setStats] = useState<IStats>();

  useEffect(() => {
    if (!isFetching && data) {
      setCoinRankingData(data);
      setCoins(data.data.coins);
      setStats(data.data.stats);
    } else {
      setCoinRankingData(undefined);
    }
  }, [isFetching]);

  return { coinRankingData, coins, stats, isFetching };
};

export default useCoinRanking;
