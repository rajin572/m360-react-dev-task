import { useParams } from "react-router-dom";
import { productApi } from "../redux/features/products/products";
import { Image, Typography } from "antd";
import Spninner from "../components/ui/Spinner";
import { TReview } from "../types";
import ReviewCard from "../components/ui/ReviewCard";
const { Title, Text } = Typography;
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { useGetProductByIdQuery } = productApi;
  const { data: productData, isFetching } = useGetProductByIdQuery(Number(id));
  const discountedPrice =
    productData?.price && productData?.discountPercentage
      ? productData.price -
        (productData.price * productData.discountPercentage) / 100
      : 0;

  if (isFetching) {
    return (
      <div>
        <Spninner />
      </div>
    );
  }
  return (
    <div
      style={{
        maxWidth: "1250px",
        width: "90%",
        margin: "50px auto",
      }}
    >
      {/* //* Product Detail */}
      <div
        style={{
          maxWidth: "100%",
          margin: "auto",
          padding: "16px",
          marginTop: "40px",
          textAlign: "left",
          color: "#111827",
        }}
      >
        <div>
          <div>
            <Image
              width="100%"
              height="auto"
              style={{
                maxHeight: "500px",
              }}
              src={productData?.images[0]}
              alt=""
            />
          </div>
          <div>
            <Title
              level={1}
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                marginBottom: "4px",
              }}
            >
              {productData?.title}
            </Title>

            <div style={{ marginBottom: "10px" }}>
              <Rating
                style={{ maxWidth: 100 }}
                value={productData?.rating as number}
                readOnly
              />
            </div>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "2px",
                backgroundColor: "#111827",
                color: "#ffffff",
                display: "inline-block",
                padding: "5px 8px",
                borderRadius: "8px",
              }}
            >
              {productData?.category}
            </Text>
            <br />
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              <span>Real Price: </span>
              {`$${productData?.price}`}
            </Text>
            <br />
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              <span>Discounted Price: </span>
              {`$${discountedPrice}`}
            </Text>
            <br />
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              <span>Stock: </span>
              {`${productData?.stock}`}
            </Text>
            <div style={{ color: "#4B5563" }}>
              {" "}
              <Title
                level={4}
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "2px",
                }}
              >
                Description:
              </Title>
              <Text>{productData?.description}</Text>
            </div>
          </div>
        </div>
      </div>
      {/* //* Reviews */}
      <div
        style={{
          backgroundColor: "#CBD5E0",
          padding: "16px",
          marginTop: "40px",
        }}
      >
        {productData?.reviews.map((review: TReview, index: number) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
