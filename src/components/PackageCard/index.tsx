"use client";

import React, { HtmlHTMLAttributes } from "react";
import { PackageState } from "@/redux/services/packagesSlice";

import { Button, Card, Flex, Typography, Space, Badge } from "antd";

const cardStyle: React.CSSProperties = {
  width: 489,
};

const imgStyle: React.CSSProperties = {
  width: 192,
};
const PackageCard = ({
  value,
  isSelected,
  onSelect,
  goToDetail,
  loading,
}: {
  value: PackageState;
  isSelected: boolean;
  onSelect: React.MouseEventHandler<HTMLDivElement>;
  goToDetail: React.MouseEventHandler<HTMLDivElement>;
  loading: boolean;
}) => {
  return (
    <Card
      hoverable
      bodyStyle={{
        padding: 0,
      }}
      style={{
        overflow: "hidden",
        border: isSelected ? "2px solid #7AC500" : "",
      }}
      onClick={onSelect}
      loading={loading}
    >
      <Flex justify="space-between">
        <img alt="avatar" src={value.imagePath} style={imgStyle} />
        <Flex
          flex={1}
          vertical
          align="flex-start"
          //   justify="space-between"
          style={{ padding: "22px" }}
        >
          <Flex
            style={{ width: "100%", marginBottom: "14px" }}
            justify="space-between"
            align="center"
          >
            <Typography.Title level={4} style={{ margin: 0 }}>
              {value.name}
            </Typography.Title>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {value.price + value.currency}
            </Typography.Title>
          </Flex>
          <Flex
            style={{ width: "100%" }}
            justify="space-between"
            align="center"
          >
            {value.details.map((item, i) => (
              <Badge key={i} status="default" text={item} />
            ))}
          </Flex>

          <Button
            style={{
              padding: 0,
            }}
            type="link"
            onClick={goToDetail}
          >
            <Typography.Text
              style={{
                color: "#00BBB4",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                textDecorationLine: "underline",
              }}
            >
              Paket detayını görüntüle
            </Typography.Text>
          </Button>

          <Flex
            style={{ width: "100%" }}
            justify="space-between"
            align="center"
          >
            {value.tags.map((item, i) => (
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
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
export default PackageCard;
