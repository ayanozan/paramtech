import { Typography } from "antd";
import React from "react";

interface IContentWrapper {
  title: React.ReactNode | string;
  children: React.ReactNode;
  isPaddingZero?: boolean;
}

const ContentWrapper = ({
  title,
  children,
  isPaddingZero,

}: IContentWrapper) => {
  return (
    <div>
      <Typography.Title level={5}>{title}</Typography.Title>
      <div
        style={{
          borderRadius: "8px",
          border: "1px solid #E1E1E1",
          padding: !isPaddingZero ? "22px" : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default ContentWrapper;
