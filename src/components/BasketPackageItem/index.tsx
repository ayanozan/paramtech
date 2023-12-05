import { Typography } from "antd";

interface IBasketPackageItem {
  name: string;
  value: string;
}

const BasketPackageItem = ({ name, value }: IBasketPackageItem) => {
  return (
    <div
      style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: "10px 12px",
        borderRadius: "8px",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Typography.Text>{name}</Typography.Text>
      <Typography.Title level={4} style={{margin:0}}>{value}</Typography.Title>
    </div>
  );
};
export default BasketPackageItem;
