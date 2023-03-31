import { Card } from "antd";
import styled from "styled-components";

export const CardStyled = styled(Card)`
  .ant-card {
    box-shadow: 0px 0px 32px rgba(136, 152, 170, 0.15);
    border-radius: 10px;
  }

  /* custom base and-card-body */
  .ant-card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
