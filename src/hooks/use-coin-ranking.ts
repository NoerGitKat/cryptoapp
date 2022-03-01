import { useEffect, useState } from "react";
import { ICoinsResponse } from "../interfaces";
import coinRankingAPI from "../services/cryptoAPI";

const useCoinRanking = () => {
  const { data, isFetching } = coinRankingAPI.useGetCryptosQuery();
  const [coinRankingData, setCoinRankingData] = useState<
    ICoinsResponse | undefined
  >();

  useEffect(() => {
    if (!isFetching && data) {
      setCoinRankingData(data);
    } else {
      setCoinRankingData(undefined);
    }
  }, [isFetching]);

  return { coinRankingData, isFetching };
};

export default useCoinRanking;
