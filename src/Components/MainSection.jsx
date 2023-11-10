import { Container,Row,Col } from "react-bootstrap";
import MusicCol from "./MusicCol";

const MainSection = () => {
  return  (

    <Container className="w-80">
      <Row>
        <h2 className="text-white fw-bold mb-4 ">Rock/Metal</h2>
        <MusicCol artist="linkin park"/>
        <h2 className="text-white fw-bold mb-4 mt-10">Rock Classic</h2>
        <MusicCol artist="queen"/>
        <h2 className="text-white fw-bold mb-4 mt-10">Punk</h2>
        <MusicCol artist="green day"/>
      </Row>
    </Container>
  )
};

export default MainSection;
