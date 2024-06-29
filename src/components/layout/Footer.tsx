import { Layout, Row, Col } from "antd";
import { CSSProperties } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaTelegramPlane,
} from "react-icons/fa";

const { Footer } = Layout;

const AppFooter = () => {
  const iconStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "8px",
    display: "inline-block",
    color: "#fff",
    lineHeight: "40px",
    textAlign: "center",
  };

  return (
    <Footer
      style={{
        background: "#1c1e22",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} sm={12} md={6} style={{ marginBottom: "16px" }}>
            <h3 style={{ color: "#fff" }}>M360ICT</h3>
            <p>© 2024</p>
          </Col>
          <Col xs={24} sm={12} md={6} style={{ marginBottom: "16px" }}>
            <h4 style={{ color: "#fff" }}>Customers</h4>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Buyer
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Supplier
              </a>
            </p>
          </Col>
          <Col xs={24} sm={12} md={6} style={{ marginBottom: "16px" }}>
            <h4 style={{ color: "#fff" }}>Company</h4>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                About us
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Careers
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Contact us
              </a>
            </p>
          </Col>
          <Col xs={24} sm={12} md={6} style={{ marginBottom: "16px" }}>
            <h4 style={{ color: "#fff" }}>Further Information</h4>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href="#" style={{ color: "#fff" }}>
                Privacy Policy
              </a>
            </p>
          </Col>
          <Col xs={24} style={{ textAlign: "center", paddingTop: "20px" }}>
            <a href="#" style={{ ...iconStyle, backgroundColor: "#4c4c4c" }}>
              <FaFacebookF />
            </a>
            <a href="#" style={{ ...iconStyle, backgroundColor: "#4c4c4c" }}>
              <FaTwitter />
            </a>
            <a href="#" style={{ ...iconStyle, backgroundColor: "#4c4c4c" }}>
              <FaLinkedinIn />
            </a>
            <a href="#" style={{ ...iconStyle, backgroundColor: "#4c4c4c" }}>
              <FaMediumM />
            </a>
            <a href="#" style={{ ...iconStyle, backgroundColor: "#4c4c4c" }}>
              <FaTelegramPlane />
            </a>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
