import DetailsForm from "@/components/DetailsForm/DetailsForm";
import Header from "@/components/Header/Header";
import Info from "@/components/Info/Info";
import { colors } from "@/helpers/styles/globalStyles";
import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 940px;
  margin: auto;
  padding-top: 100px;

  @media (max-width: 1023px) {
    padding-top: 50px;
    width: 700px;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
    width: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export default function HomePage() {
  return (
    <Page>
      <Container>
        <Header />
        <Wrapper>
          <DetailsForm />
          <Info />
        </Wrapper>
      </Container>
    </Page>
  );
}
