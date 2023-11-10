import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { setPlayMusicAction } from "../redusx/action";
import { useDispatch, useSelector } from "react-redux";

const MusicCol = (props) => {
  const [musicArray, setMusicArray] = useState([]);
  const dispatch = useDispatch();

  const handleSection = async (artistName) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.data);
        setMusicArray(data.data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleSection(props.artist);
  }, []);

  return musicArray.slice(0, 4).map((elem) => {
    return (
      <Col key={elem.id} className="col-12 col-sm-6 col-md-4 col-xl-3  ">
        <Card
          className="bg-none1 border-0"
          onClick={() => {
            dispatch(
              setPlayMusicAction({
                title: elem.title,
                artist: elem.artist.name,
                id: elem.id,
              })
            );
          }}
        >
          <Card.Img className="img-fluid w-100" src={elem.album.cover_medium} />
          <Card.Body className="py-0 d-flex flex-column justify-content-center align-items-center">
            <Card.Text className="little text-white mb-0">
              "
              {elem.title.length < 16
                ? `${elem.title}`
                : `${elem.title.substring(0, 16)}...`}
              "
            </Card.Text>
            <Card.Text className="little text-white mb-0">
              {elem.artist.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};

export default MusicCol;
