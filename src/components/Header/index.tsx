"use client";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Layout, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import profilePic from "../../app/Frame.svg";

const HeaderProvider = () => {
  const auth = useSelector((state: any) => state.authReducer.value);
  const token = getCookie("token");
  const pathname = usePathname();
  const { Header, Content } = Layout;

  if (!token || pathname === "/login") return;
  return (
    <Layout>
      <Header
        color="#FFF"
        style={{
          backgroundColor: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={profilePic}
          width={218}
          height={25}
          alt="Picture of the author"
          onClick={() => window.open("https://www.paramtech.com.tr/", "_blank")}
          style={{ cursor: "pointer" }}
        />
        <div>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            style={{ marginRight: "11px" }}
          />
          <Typography.Text>{auth.user.email}</Typography.Text>
        </div>
      </Header>
    </Layout>
  );
};
export default HeaderProvider;
