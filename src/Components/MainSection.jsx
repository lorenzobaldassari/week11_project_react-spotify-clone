import { Container, Row } from "react-bootstrap";
import MusicCol from "./MusicCol";
import FetchComponent from "./fetchComponent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MainSection = () => {
  const searchQuery = useSelector((state) => state.search.content);

  const [ok, setOk] = useState(false);

  const display = () => {
    console.log(`quesry`, searchQuery);
    if (searchQuery.length > 3) {
      setOk(true);
    }
  };

  useEffect(() => {
    setTimeout(display, 200);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <Container className="w-80 mbottom">
      <Row>
        {ok && <h2 className="text-white">search Results</h2>}

        <FetchComponent />
        <h2 className="text-white fw-bold mb-4 ">Rock/Metal</h2>
        <MusicCol artist="linkin park" />
        <h2 className="text-white fw-bold mb-4 mt-10">Rock Classic</h2>
        <MusicCol artist="queen" />
        <h2 className="text-white fw-bold mb-4 mt-10">Punk</h2>
        <MusicCol artist="green day" />
      </Row>
    </Container>
  );
};

export default MainSection;
