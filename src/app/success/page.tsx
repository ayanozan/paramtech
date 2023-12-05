"use client";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const Success = () => {
  return (
    <div
      style={{
        // width:'355px',
        borderRadius: "12px",
        backgroundColor: "#FFF",

        boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
        padding: "52px 32px 81px 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:'center',
          gap:'31px'
        }}
      >
        <CheckCircleOutlined
          style={{ fontSize: "120px", color: "rgba(0, 156, 16, 0.85)" }}
        />
        <Typography.Title level={1}>Başarıyla Tamamlandı!</Typography.Title>
      </div>
    </div>
  );
};
export default Success;
