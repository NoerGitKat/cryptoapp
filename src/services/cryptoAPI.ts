import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICoinsResponse } from "../interfaces";

const coinRankingAPIHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COINRANKING,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({
  url,
  headers: coinRankingAPIHeaders,
});

const coinRankingAPI = createApi({
  reducerPath: "coinRankingAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<ICoinsResponse, void>({
      query: () => createRequest("/coins"),
    }),
  }),
});

export default coinRankingAPI;
