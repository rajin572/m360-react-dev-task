import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Space,
  InputNumber,
  Row,
  Col,
} from "antd";
import { FormListFieldData } from "antd/lib/form/FormList";
import { productApi } from "../redux/features/products/products";
import Spinner from "../components/ui/Spinner"; // Assuming you meant Spinner instead of Spninner
import { TCategory, TProduct, TReview } from "../types";

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    useGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useUpdateProductDataMutation,
  } = productApi;

  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useGetProductByIdQuery(Number(id));

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoryError,
  } = useGetAllCategoriesQuery();

  const [updateProduct, { isLoading: updating }] =
    useUpdateProductDataMutation();

  const [form] = Form.useForm();

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        ...product,
        reviews: product.reviews || [],
      });
    }
  }, [product, form]);

  const onFinish = async (values: TProduct) => {
    try {
      const formattedValues = {
        ...values,
        price: Number(values.price),
        reviews: values.reviews.map((review: TReview) => ({
          ...review,
          rating: Number(review.rating),
        })),
      };

      console.log("Updated Product:", formattedValues);
      await updateProduct({
        id: Number(id),
        product: formattedValues,
      }).unwrap();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (productLoading || categoriesLoading) {
    return (
      <div className="h-fit">
        <Spinner />
      </div>
    );
  }

  if (productError || categoryError) {
    console.log(productError || categoryError);
  }

  const categories = categoriesData as unknown as TCategory[];

  return (
    <Form
      form={form}
      layout="vertical"
      style={{
        maxWidth: "1250px",
        width: "90%",
        margin: "50px auto",
      }}
      onFinish={onFinish}
      initialValues={{
        ...product,
        category: product?.category || "",
        reviews: product?.reviews || [],
      }}
    >
      <Row gutter={12}>
        <Col xs={24} lg={12}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            name="discountPercentage"
            label="Discount Percentage"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select>
              {categories?.map((category) => (
                <Select.Option key={category.slug} value={category.name}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={8} />
      </Form.Item>
      <Form.List name="reviews">
        {(fields: FormListFieldData[], { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "reviewerName"]}
                  fieldKey={[String(key), "reviewerName"]}
                  rules={[{ required: true, message: "Missing user" }]}
                >
                  <Input placeholder="reviewerName" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "reviewerEmail"]}
                  fieldKey={[String(key), "reviewerEmail"]}
                  rules={[{ required: true, message: "Missing reviewerEmail" }]}
                >
                  <Input placeholder="reviewerEmail" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "comment"]}
                  fieldKey={[String(key), "comment"]}
                  rules={[{ required: true, message: "Missing comment" }]}
                >
                  <Input placeholder="Review" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "rating"]}
                  fieldKey={[String(key), "rating"]}
                  rules={[{ required: true, message: "Missing rating" }]}
                >
                  <InputNumber placeholder="Rating" />
                </Form.Item>
                <Button type="default" onClick={() => remove(name)}>
                  Remove
                </Button>
              </Space>
            ))}
            <Form.Item>
              <Button type="default" onClick={() => add()} block>
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={updating}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProduct;
