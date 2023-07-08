import styled from "styled-components";
import Router from "./Router";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
interface DummyProps {
  text: string;
  active?: boolean;
}
function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}
function App() {
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <H1>hello, react</H1>
      <form action="#">
        <button onClick={onClick}>click me!</button>
      </form>
    </Container>
  );
}

export default App;
