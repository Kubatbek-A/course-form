import styled from "styled-components";
import { colors } from "@/helpers/styles/globalStyles";
import { ReactNode } from "react";

const StyledButton = styled.button`
  width: 199px;
  height: 55px;
  background-color: ${colors.green};
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  color: ${colors.greenLight100};
  border: 1.5px solid ${colors.green};
  box-shadow: ${colors.boxShadow};

  &:hover {
    background-color: ${colors.greenLight200};
  }

  &:active {
    background-color: ${colors.greenDark};
  }
`;

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
