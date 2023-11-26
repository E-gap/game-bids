import Container from "./Container/Container";
import FirstGameRandom from "./FirstGameRandom/FirstGameRandom";
import FirstGameWin from "./FirstGameWin/FirstGameWin";

function App() {
  return (
    <>
      <Container>
        <FirstGameRandom />
        <FirstGameWin />
      </Container>
    </>
  );
}

export default App;
