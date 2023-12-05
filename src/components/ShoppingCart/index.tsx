import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";

const ShoppingCart = ({ totalPrice }: { totalPrice: number }) => {
  const router = useRouter();

  return (
    <Flex align="center" justify="space-between">
      <div>
        <Typography.Text>Seçilen Paket Tutarı: </Typography.Text>
        <Typography.Text>{totalPrice}₺</Typography.Text>
      </div>
      <Button type="primary" size="large" style={{width:'272px'}} onClick={()=>router.push("/checkout")}>Devam Et</Button>
    </Flex>
  );
};
export default ShoppingCart;
