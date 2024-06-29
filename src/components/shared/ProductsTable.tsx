import { Button, Table, TableColumnsType, TablePaginationConfig } from "antd";
import { productApi } from "../../redux/features/products/products";
import { TProduct } from "../../types";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

export type TTableData = Pick<
  TProduct,
  "title" | "brand" | "price" | "stock" | "rating"
>;

const ProductsTable = () => {
  const { useGetAllProductsQuery } = productApi;

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const { data: productsData, isFetching } = useGetAllProductsQuery({
    limit: pagination.pageSize,
    skip: (pagination.current - 1) * pagination.pageSize,
  });

  const tableData = productsData?.products?.map(
    ({ id, title, brand, price, availabilityStatus, stock, rating }) => ({
      key: id,
      id,
      title,
      brand,
      price,
      availabilityStatus,
      stock,
      rating,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Availability Status",
      key: "availabilityStatus",
      dataIndex: "availabilityStatus",
    },
    {
      title: "Stock",
      key: "stock",
      dataIndex: "stock",
    },
    {
      title: "Rating",
      key: "rating",
      dataIndex: "rating",
    },
    {
      title: "Action",
      key: "id",
      render: (record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to={`/products/${record.id}`}>
              <Button type="primary">View</Button>
            </Link>
            <Button>
              <FaRegEdit />
            </Button>
          </div>
        );
      },
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination({
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 10,
      total: productsData?.total || 0,
    });
  };

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: productsData?.total || 0,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ProductsTable;
