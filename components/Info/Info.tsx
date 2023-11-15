import { colors } from "@/helpers/styles/globalStyles";
import styled from "styled-components";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Short = styled.div`
  width: 160px;
  height: 28px;
  background-color: ${colors.circlesColor};
  border-radius: 30px;
`;

const Long = styled.div`
  width: 350px;
  height: 28px;
  background-color: ${colors.circlesColor};
  border-radius: 30px;
`;

export default function Info() {
  return (
    <InfoWrapper>
      <Short />
      <Long />
      <Long />
      <Long />
      <Short />
    </InfoWrapper>
  );
}
