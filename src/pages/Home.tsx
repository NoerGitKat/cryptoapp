import React from "react";
import { Col, Row, Statistic } from "antd";
import Title from "antd/lib/typography/Title";

interface IHomeProps {
  name: string;
}

const columns: { title: string; value: number }[] = [
  { title: "Cryptocurrencies", value: 5 },
  { title: "Exchanges", value: 5 },
  { title: "Market Cap", value: 5 },
  { title: "24h Volume", value: 5 },
  { title: "Markets", value: 5 },
];

const Home: React.FC<IHomeProps> = ({ name }) => {
  return (
    <>
      <Title level={2} className="heading">
        {name}
      </Title>
      <Row>
        {columns.map((col) => (
          <Col span={12}>
            <Statistic title={`Total ${col.title}`} value={col.value} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
