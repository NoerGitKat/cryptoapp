import * as React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png";

interface INavbarProps {
  name: string;
}

const menuItems: { icon: React.ReactNode; href: string; name: string }[] = [
  {
    icon: <HomeOutlined />,
    href: "/",
    name: "Home",
  },
  {
    icon: <FundOutlined />,
    href: "/currencies",
    name: "Crypocurrencies",
  },
  {
    icon: <MoneyCollectOutlined />,
    href: "/exchanges",
    name: "Exchanges",
  },
  {
    icon: <BulbOutlined />,
    href: "/news",
    name: "News",
  },
];

const Navbar: React.FC<INavbarProps> = ({ name }) => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">{name}</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        {menuItems.map((item) => (
          <Menu.Item icon={item.icon}>
            <Link to={item.href}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  );
};

export default Navbar;
