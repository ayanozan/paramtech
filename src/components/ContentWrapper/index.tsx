import { Typography } from "antd";
import React, { Children } from "react";

interface IContentWrapper {
  title: string;
  children: React.ReactNode;
}

const ContentWrapper = ({ title, children }: IContentWrapper) => {
  return (
    <div>
      <Typography.Title level={5}>{title}</Typography.Title>
      <div
        style={{
          borderRadius: "8px",
          border: "1px solid #E1E1E1",
          padding: "22px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default ContentWrapper;
