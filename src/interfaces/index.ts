export interface INavbarProps {
  name: string;
}

export interface IHomeProps {
  name: string;
}

export interface ICoin {
  "24hVolume": string;
  btcPrice: string;
  change: number;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
}

export interface IStats {
  total: number;
  total24hVolume: number;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: number;
  totalMarkets: number;
}

export interface ICoinsResponse {
  data: {
    coins: ICoin[];
    stats: IStats;
  };
  status: string;
}
