export interface INavbarProps {
  name: string;
}

export interface IHomeProps {
  name: string;
}

export interface ICoin {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
}

export interface IStats {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}

export interface ICoinsResponse {
  data: {
    coins: ICoin[];
    stats: IStats;
  };
  status: string;
}
