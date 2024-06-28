import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This Is Home Page</h1>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Home;
