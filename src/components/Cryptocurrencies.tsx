import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";
import { useCoinRanking } from "../hooks";
import { ICoin } from "../interfaces";

const Cryptocurrencies = (maxCount: number) => {
  const { coins, stats, isFetching } = useCoinRanking(maxCount);

  if (isFetching) {
    return <Spin />;
  }

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins
          ? coins.map((currency: ICoin) => (
              <Col
                key={currency.uuid}
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
              >
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img
                        className="crypto-image"
                        src={currency.iconUrl}
                        alt={`${currency.name} Icon`}
                      />
                    }
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                  </Card>
                </Link>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
