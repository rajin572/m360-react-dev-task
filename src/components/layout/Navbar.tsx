import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Products</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
