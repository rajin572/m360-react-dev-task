import ProductsTable from "../components/ui/ProductsTable";

const Home = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "1250px",
          width: "90%",
          margin: "50px auto",
        }}
      >
        <ProductsTable />
      </div>
    </div>
  );
};

export default Home;
