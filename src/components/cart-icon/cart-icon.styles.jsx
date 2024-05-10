import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 32px;
  height: 32px;
`;

export const CartIconContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 9px;
`;
