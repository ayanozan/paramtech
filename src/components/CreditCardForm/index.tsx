import React from "react";
import { Row, Col, Form, Input } from "antd";

const CreditCardForm = ({ onSubmit, form }: { onSubmit: any; form: any }) => {
  const maskCreditCardNumber = (value: any) => {
    // Sayıları al ve maksimum 16 karaktere sınırla
    const numericValue = value.replace(/\D/g, "").slice(0, 16);

    // 4'ler arasına boşluk ekleyerek maskele
    let maskedValue = "";
    for (let i = 0; i < numericValue.length; i += 4) {
      maskedValue += numericValue.slice(i, i + 4) + " ";
    }

    return maskedValue.trim();
  };

  const validateCreditCardNumber = (rule: any, value: any) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length !== 16) {
      return Promise.reject("Kredi kartı numarası 16 karakter olmalıdır.");
    }

    return Promise.resolve();
  };

  const maskExpiryDate = (value: any) => {
    // Sadece sayıları al
    const numericValue = value.replace(/\D/g, "");

    // Maksimum 4 karaktere izin ver
    const limitedValue = numericValue.slice(0, 4);

    // 2 karakteri ayırarak maskele
    return limitedValue.replace(/(\d{2})(\d{2})/, "$1/$2");
  };

  const validateExpiryDate = (rule: any, value: any) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length !== 4) {
      return Promise.reject("Geçerli bir son kullanma tarihi giriniz.");
    }

    return Promise.resolve();
  };

  const maskCVV = (value: any) => {
    // Sadece sayıları al
    const numericValue = value.replace(/\D/g, "");

    // Maksimum 3 karaktere izin ver
    return numericValue.slice(0, 3);
  };

  const validateCVV = (rule: any, value: any) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length !== 3) {
      return Promise.reject("Geçerli bir CVV/CVC numarası giriniz.");
    }

    return Promise.resolve();
  };

  return (
    <Form
      name="basic"
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Row gutter={28}>
        <Col span={12}>
          <Form.Item
            label="Kart Üzerindeki İsim Soyisim"
            name="cardHolderName"
            rules={[
              {
                required: true,
                message: "İsim Soyisim boş bırakılamaz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row gutter={28}>
            <Col span={12}>
              <Form.Item
                name="cardNumber"
                label="Kredi Kartı Numarası"
                rules={[
                  { required: true, message: "Kredi kartı numarası zorunlu!" },
                  { validator: validateCreditCardNumber },
                ]}
                getValueFromEvent={(e) => maskCreditCardNumber(e.target.value)}
              >
                <Input placeholder="1234 5678 9012 3456" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="expireDate"
                label="Son Kul. Tar."
                rules={[
                  { required: true, message: "Son kullanma tarihi zorunlu!" },
                  { validator: validateExpiryDate },
                ]}
                getValueFromEvent={(e) => maskExpiryDate(e.target.value)}
              >
                <Input placeholder="MM/YY" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="cvv"
                label="CVV/CVC"
                rules={[
                  { required: true, message: "CVV/CVC numarası zorunlu!" },
                  { validator: validateCVV },
                ]}
                getValueFromEvent={(e) => maskCVV(e.target.value)}
              >
                <Input placeholder="123" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default CreditCardForm;
