import React from "react";
import styled from "styled-components";
import { Card, Input, Row } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { CardStyled as MainCardStyled, TextStyled } from "src/components/styled";
const LoanRequestList: React.FC = () => {
  return (
    <MainCardStyled
      title={<TextStyled style={{ color: "var(--title-color)", fontSize: 20, fontWeight: 600 }}>รายการขอสินเชื่อ</TextStyled>}
      extra={<TextStyled style={{ color: "var(--primary-color)" }}>ชื่อพนักงานขาย : นายไอคอน เฟรมเวิร์ค</TextStyled>}
    >
      <RowInputStyled>
        <Input placeholder="เลขที่คำขอ, โครงการ, เลขที่แปลง / ห้อง , ชื่อผู้ขอ" prefix={<SearchOutlined />} />
      </RowInputStyled>
    </MainCardStyled>
  );
};

export default LoanRequestList;

export const RowInputStyled = styled(Row)`
  width: 75%;
  align-self: end;
  margin-bottom: 16px;
`;
