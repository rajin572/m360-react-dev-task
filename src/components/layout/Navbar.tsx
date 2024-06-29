import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <div
            style={{
              maxWidth: "1250px",
              width: "90%",
              margin: "50px auto",
            }}
          >
            <Menu.Item key="1">
              <Link to="/">Products</Link>
            </Menu.Item>
          </div>
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
