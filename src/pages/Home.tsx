import React from "react";
import { Col, Row, Statistic, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { IHomeProps, IStats } from "../interfaces";
import { useCoinRanking } from "../hooks";
import { startCase } from "lodash";

// Temp
const columns: { title: string; value: number }[] = [
  { title: "Cryptocurrencies", value: 5 },
  { title: "Exchanges", value: 5 },
  { title: "Market Cap", value: 5 },
  { title: "24h Volume", value: 5 },
  { title: "Markets", value: 5 },
];

const Home: React.FC<IHomeProps> = ({ name }) => {
  const { coinRankingData, isFetching } = useCoinRanking();

  return (
    <>
      <Title level={2} className="heading">
        {name}
      </Title>
      {isFetching && !coinRankingData ? (
        <Spin />
      ) : (
        <Row>
          {coinRankingData
            ? Object.keys(coinRankingData.data.stats).map((stat) => (
                <Col span={12} key={stat}>
                  <Statistic
                    title={startCase(stat)}
                    value={coinRankingData.data.stats[stat as keyof IStats]}
                  />
                </Col>
              ))
            : null}
        </Row>
      )}
    </>
  );
};

export default Home;
