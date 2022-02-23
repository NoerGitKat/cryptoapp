import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const coinRankingAPIHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "d1c6ba918dmshb21d038b58a9144p102725jsn36315a31a555",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url: string) => ({
  url,
  headers: coinRankingAPIHeaders,
});

const coinRankingAPI = createApi({
  reducerPath: "coinRankingAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export default coinRankingAPI;
