import DetailsForm from "@/components/DetailsForm/DetailsForm";
import { colors } from "@/helpers/styles/globalStyles";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: ${colors.white};
  height: 62px;
  width: 100%;
  min-width: 280px;
  border-radius: 30px;
  box-shadow: ${colors.boxShadowHeader};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  margin-bottom: 90px;
  gap: 20px;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div`
  width: 133px;
  height: 28px;
  background-color: ${colors.circlesColor};
  border-radius: 30px;
`;

const NavItem = styled.div`
  width: 80px;
  height: 28px;
  background-color: ${colors.circlesColor};
  border-radius: 30px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  width: 50px;
  height: 28px;
  background-color: ${colors.circlesColor};
  border-radius: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Left>
        <Logo />
      </Left>
      <Right>
        <BurgerMenu />
        <NavItem />
        <NavItem />
        <NavItem />
      </Right>
    </HeaderWrapper>
  );
}
