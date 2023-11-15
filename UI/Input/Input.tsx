import styled from "styled-components";
import { colors } from "@/helpers/styles/globalStyles";
import ErrorIcon from "@/assets/error.svg";

type StyledInputProps = {
  $error?: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const InputLabel = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.44px;
  color: ${colors.black};
`;

const StyledInput = styled.input<StyledInputProps>`
  border: 1.5px solid
    ${(props) => (!!props.$error ? colors.error : colors.green)};
  border-radius: 5px;
  width: 350px;
  height: 55px;
  font-size: 18px;
  box-shadow: ${colors.boxShadow};

  &:focus {
    border-width: 3px;
  }
`;

export const StyledError = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 17.58px;
  color: ${colors.error};
  display: flex;
  align-items: center;
  gap: 3px;
`;

type InputProps = {
  error?: string;
  label?: string;
};

export default function Input({ error, label, ...rest }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput $error={error} {...rest}></StyledInput>
      {error && (
        <StyledError>
          <ErrorIcon />
          {error}
        </StyledError>
      )}
    </InputWrapper>
  );
}
