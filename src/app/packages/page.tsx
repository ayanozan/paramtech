"use client";
import { useRouter } from "next/navigation";
import { Col, Divider, Row } from "antd";
import PackageCard from "@/components/PackageCard";
import ShoppingCart from "@/components/ShoppingCart";
import { useGetPackageQuery } from "@/redux/services/packagesSlice";
import { useSelector, useDispatch } from "react-redux";
import { handleAddOrRemovePackage } from "@/redux/services/basketSlice";
import { PackageState, selectForDetail } from "@/redux/services/packagesSlice";

const Packages = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetPackageQuery("");
  const selectedPackageTotalPrice = useSelector(
    (state: any) => state.basketReducer.totalAmount
  );
  const isSelectedPackage =
    useSelector((state: any) => state.basketReducer.basketList).length > 0;

  const selectedPackageIds = useSelector(
    (state: any) => state.basketReducer.basketListIds
  );

  const dispatch = useDispatch();

  const handleSelect = (item: PackageState) => {
    dispatch(handleAddOrRemovePackage(item));
  };
  const handleSelectForDetail = (event: any) => (item: any) => {
    event.stopPropagation();
    dispatch(selectForDetail(item));
    router.push(`/packages/${item._id}`);
  };
  return (
    <div
      style={{
        position: "relative",
        width: "1120px",
        borderRadius: "12px",
        backgroundColor: "#FFF",

        boxShadow: "0px 5px 20px 20px rgba(0, 0, 0, 0.03)",
        padding: `52px 32px ${isSelectedPackage ? "0px" : "81px"} 32px`,
      }}
    >
      <Row gutter={[75, 48]}>
        {data?.allPackages.map((item, i) => (
          <Col key={i} span={12} xs={24} sm={12}>
            <PackageCard
              value={item}
              onSelect={() => handleSelect(item)}
              isSelected={selectedPackageIds.includes(item._id)}
              goToDetail={(event) => handleSelectForDetail(event)(item)}
              loading={isLoading}
            />
          </Col>
        ))}
      </Row>
      {isSelectedPackage && (
        <div>
          <Divider style={{ marginBottom: 0 }} />
          <div
            style={{
              width: "100%",
              height: "90px",
              bottom: 0,
              padding: "22px 0",
            }}
          >
            <ShoppingCart totalPrice={selectedPackageTotalPrice} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Packages;
