import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        backgroundColor: "#FFF",
        boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
        padding: "52px 32px 81px 32px",
      }}
    >
      {children}
    </div>
  );
};
export default Box;
