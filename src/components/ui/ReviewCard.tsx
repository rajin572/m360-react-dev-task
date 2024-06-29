import { Avatar, Divider } from "antd";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { TReview } from "../../types";

const ReviewCard = ({ review }: { review: TReview }) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "4px",
        padding: "8px",
        marginBottom: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <Avatar
          src="https://i.ibb.co/NL7144F/blank-profile-picture-973460-1280.png"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        <div>
          <p
            style={{
              color: "#1F2937",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 0 3px 0",
            }}
          >
            {review.reviewerName}
          </p>
          <p
            style={{
              color: "#1F2937",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 0 3px 0",
            }}
          >
            {review.reviewerEmail}
          </p>
          <p
            style={{
              color: "#6B7280",
              fontSize: "12px",
              margin: "0 0 3px 0",
            }}
          >
            {review.date}
          </p>
        </div>
      </div>
      <Divider
        style={{
          width: "100%",
          height: "1px",
          borderRadius: "1px",
          backgroundColor: "#E5E7EB",
          margin: "8px 0",
        }}
      />
      <div>
        <p
          style={{
            color: "#1F2937",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          {review.comment}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FaThumbsUp
            style={{
              cursor: "pointer",
              marginRight: "8px",
              color: "#1F2937",
            }}
          />
          <span
            style={{
              color: "#1F2937",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            {" "}
            |{" "}
          </span>
          <FaThumbsDown
            style={{
              cursor: "pointer",
              marginRight: "8px",
              color: "#1F2937",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
