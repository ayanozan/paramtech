"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "@/components/Box";
import ContentWrapper from "@/components/ContentWrapper";
import { InitialState, initialState } from "@/redux/services/basketSlice";
import MyBasket from "@/components/MyBasket";

import { Badge, Col, Row, Typography } from "antd";
import { useSelector } from "react-redux";

const PackageDetail = () => {
  const router = useRouter();
  const detail = useSelector((state: any) => state.packageReducer.package);
  const [basket, setBasket] = useState<InitialState>(initialState);

  useEffect(() => {
    const storedObjectString = localStorage.getItem("myBasket");

    if (storedObjectString !== null) {
      const storedObject = JSON.parse(storedObjectString);
      setBasket(storedObject);
    }
  }, []);

  return (
    <Row gutter={28}>
      <Col span={16}>
        <Box>
          <div style={{ marginBottom: "48px" }}>
            <ContentWrapper
              isPaddingZero
              title={
                <Typography.Text
                  style={{
                    color: "#000",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "22px",
                  }}
                >
                  Paket Detay |&nbsp;
                  <Typography.Text
                    style={{
                      color: " #000",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "22px",
                    }}
                  >
                    {detail.price + detail.currency}
                  </Typography.Text>
                </Typography.Text>
              }
            >
              <img
                style={{ width: "100%", height: "195px", borderRadius: "8px" }}
                alt="avatar"
                src={detail.imagePath}
              />
            </ContentWrapper>
          </div>
          <ContentWrapper
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "13px",
                }}
              >
                <Typography.Text
                  style={{
                    color: " #000",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "22px",
                  }}
                >
                  Detay Açıklama
                </Typography.Text>
                <div>
                  {detail.tags.map((item: any, i: number) => (
                    <Badge
                      key={i}
                      count={item}
                      showZero
                      color="#C4C4C4"
                      style={{
                        color: "#000",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                      }}
                    />
                  ))}
                </div>
              </div>
            }
          >
            {detail.moreInformation}
          </ContentWrapper>
        </Box>
      </Col>
      <Col span={8}>
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
            padding: "23px 17px 17px 17px",
          }}
        >
          <MyBasket
            basketList={basket.basketList}
            onClick={() => router.push("/checkout")}
          />
        </div>
      </Col>
    </Row>
  );
};
export default PackageDetail;
