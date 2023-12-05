"use client";
import Box from "@/components/Box";
import ContentWrapper from "@/components/ContentWrapper";

import { Col, Form, Row } from "antd";

const PackageDetail = ({ props }: { props: any }) => {
  return (
    <Row gutter={28}>
      <Col span={16}>
        <Box>
          <ContentWrapper title="Paket Detay |">
            <img alt="avatar" src={""} />
          </ContentWrapper>

          <ContentWrapper title="Detay Açıklama">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            arcu ultricies, hendrerit turpis ac, semper justo. Nam orci odio,
            semper id mauris nec, ornare luctus elit. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Mauris eu justo sapien. Nullam turpis magna, laoreet at finibus sit
            amet, ultrices et dolor. Suspendisse vestibulum gravida quam, nec
            interdum justo pulvinar nec. Aenean quam mauris, fermentum eu
            iaculis non, egestas a lorem. Sed ante justo, pulvinar dapibus enim
            id, euismod feugiat arcu. Mauris dictum sed tortor ut placerat. Sed
            leo ante, laoreet at egestas ut, dapibus et turpis. Duis non enim
            sed ante aliquet maximus eu et dui. Sed consequat iaculis libero, id
            pharetra purus blandit vitae. Etiam ut lobortis tortor, sed
            efficitur tortor. Duis facilisis quam sem, quis pulvinar erat
            aliquet sit amet. Aliquam velit orci, pellentesque eget varius
            finibus, sodales quis dolor.
          </ContentWrapper>
        </Box>
      </Col>
      <Col span={8}>{/* <Box>c</Box> */}</Col>
    </Row>
  );
};
export default PackageDetail;
