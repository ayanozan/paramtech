import { Button, Typography } from "antd";
import BasketPackageItem from "../BasketPackageItem";

const MyBasket = ({
  basketList,
  onClick,
  isLoadingButton
}: {
  basketList: any;
  onClick: any;
  isLoadingButton?:boolean
}) => {
  return (
    <div>
      <Typography.Text
        style={{
          display: "block",
          marginBottom: "18px",
          color: "#000",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "22px",
        }}
      >
        Sepetteki Paketler
      </Typography.Text>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {basketList.map((item: any, i: number) => (
          <BasketPackageItem
            key={i}
            name={item.name}
            value={item.price + item.currency}
          />
        ))}
      </div>
      <Button
        onClick={onClick}
        type="primary"
        style={{ width: "100%", marginTop: "14px" }}
        loading={isLoadingButton}
      >
        Ödeme Yap
      </Button>
    </div>
  );
};
export default MyBasket;
