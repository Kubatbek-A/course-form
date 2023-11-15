import styled from "styled-components";
import { colors } from "@/helpers/styles/globalStyles";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 21.5px;
  height: 21px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: 1.5px solid ${colors.green};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.greenLight100};
  }

  &:checked {
    background-color: ${colors.green};
  }

  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 1px;
    width: 7px;
    height: 13px;
    border: solid ${colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }

  &:checked::before {
    display: block;
  }

  &:checked:hover {
    background-color: transparent;
  }

  &:checked:hover::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 1px;
    width: 7px;
    height: 13px;
    border: solid ${colors.green};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const InputLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (e: any) => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <CheckboxWrapper>
      <StyledCheckbox checked={checked} type="checkbox" onChange={onChange} />
      <InputLabel>{label}</InputLabel>
    </CheckboxWrapper>
  );
}
