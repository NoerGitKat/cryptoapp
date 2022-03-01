import React from "react";
import { Col, Row, Statistic, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { IHomeProps, IStats, ICoin } from "../interfaces";
import coinRankingAPI from "../services/cryptoAPI";

// Temp
const columns: { title: string; value: number }[] = [
  { title: "Cryptocurrencies", value: 5 },
  { title: "Exchanges", value: 5 },
  { title: "Market Cap", value: 5 },
  { title: "24h Volume", value: 5 },
  { title: "Markets", value: 5 },
];

const Home: React.FC<IHomeProps> = ({ name }) => {
  const { data, isFetching } = coinRankingAPI.useGetCryptosQuery();
  // const { stats, coins }: { stats: IStats; coins: ICoin[] } = data && data.data;

  return (
    <>
      <Title level={2} className="heading">
        {name}
      </Title>
      {isFetching && !data ? (
        <Spin />
      ) : (
        <Row>
          {columns.map((col) => (
            <Col span={12} key={col.title}>
              <Statistic title={`Total ${col.title}`} value={col.value} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
