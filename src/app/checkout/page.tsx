"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Form, Row, message } from "antd";
import Box from "@/components/Box";
import ContentWrapper from "@/components/ContentWrapper";
import CreditCardForm from "@/components/CreditCardForm";
import MyBasket from "@/components/MyBasket";
import {
  useGetPaymentQuery,
  usePostCheckoutMutation,
} from "@/redux/services/checkout";
import { InitialState, initialState } from "@/redux/services/basketSlice";

const Checkout = () => {
  const router = useRouter();
  const { data } = useGetPaymentQuery("");
  const [postCheckout, { isLoading: loading }] =
    usePostCheckoutMutation();

  const [basket, setBasket] = useState<InitialState>(initialState);

  useEffect(() => {
    const storedObjectString = localStorage.getItem("myBasket");
    if (storedObjectString !== null) {
      const storedObject = JSON.parse(storedObjectString);
      setBasket(storedObject);
    }
  }, []);

  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = {
      packageIds: basket.basketListIds,
      totalAmount: basket.totalAmount,
      currency: basket.currency,
      ...form.getFieldsValue(),
    };
    postCheckout(values)
      .unwrap()
      .then((data) => {
        message.success(data.message);
        router.push("/success");
      })
      .catch((error: any) => {
        message.error(error.data.error.message ?? "Ödeme yapılamadı!");
      });
  };
  return (
    <Row gutter={28}>
      <Col span={16} xs={24} sm={16}>
        <Box>
          <ContentWrapper title="Kart Bilgileri">
            <CreditCardForm form={form} />
          </ContentWrapper>

          <ContentWrapper title="Sözleşme">
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </ContentWrapper>
        </Box>
      </Col>
      <Col span={8} xs={24} sm={8}>
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
            padding: "23px 17px 17px 17px",
          }}
        >
          <MyBasket
            basketList={basket?.basketList}
            onClick={onSubmit}
            isLoadingButton={loading}
          />
        </div>
      </Col>
    </Row>
  );
};
export default Checkout;
