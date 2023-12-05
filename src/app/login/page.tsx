"use client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { Flex, Form, Button, Input, message } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { AppDispatch } from "@/redux/store";
import { logIn } from "@/redux/services/authSlice";
import { useGetLoginMutation } from "@/redux/services/authSlice";
import "@/styles/login.module.scss";

const formStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: 12,
  background: "#FFF",
  boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
  padding: "81px 52px 59px 52px",
};
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [getLogin, { isLoading, isSuccess }] = useGetLoginMutation();

  const onSubmit = async (values: { email: string; code: string }) => {
    getLogin(JSON.stringify(values))
      .unwrap()
      .then((data) => {
        dispatch(logIn(data));
        setCookie("token", data.token);
        message.success(data.message);
         router.push("/packages");
      })
      .catch((error) => {
        message.error("Login failed");
      });
  };

  const validateEmail = (_: any, value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
      return Promise.resolve();
    }

    return Promise.reject("Geçerli bir e-posta adresi giriniz!");
  };

  return (
    <div>
      <Flex style={formStyle} justify={"center"} align={"center"}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
          style={{ width: "100%" }}
        >
          <Form.Item
            label="Email Adresiniz"
            name="email"
            rules={[
              {
                required: true,
                message: "Lütfen emailinizi girin!",
              },
              {
                validator: validateEmail,
              },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            label="Kullanıcı Kodunuz"
            name="code"
            rules={[{ required: true, message: "Lütfen kodunuzu giriniz!" }]}
          >
            <Input.Password prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="form-button"
              style={{ width: "100%" }}
              loading={isLoading}
            >
              Devam Et
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};
export default Login;
