import React, { Fragment } from "react";
import { Col, Row, Statistic, Spin } from "antd";
import millify from "millify";
import Title from "antd/lib/typography/Title";
import { IHomeProps, IStats } from "../interfaces";
import { useCoinRanking } from "../hooks";
import startCase from "lodash/startCase";
import { Link } from "react-router-dom";
import { News, Cryptocurrencies } from "../components";

const navigation = [
  {
    title: "Top 10 Cryptocurrencies in the world",
    link: "cryptocurrencies",
    component: Cryptocurrencies,
  },
  { title: "Latest Crypto News", link: "news", component: News },
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
                    value={millify(
                      coinRankingData.data.stats[stat as keyof IStats]
                    )}
                  />
                </Col>
              ))
            : null}
        </Row>
      )}
      {navigation.map((navItem) => (
        <Fragment key={navItem.title}>
          <div className="home-heading-container">
            <Title level={2} className="home-title">
              {navItem.title}
            </Title>
            <Title level={3} className="show-more">
              <Link to={`/${navItem.link}`}>Show More</Link>
            </Title>
          </div>
          {navItem.component(32)}
        </Fragment>
      ))}
    </>
  );
};

export default Home;
