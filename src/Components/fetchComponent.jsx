import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { setPlayMusicAction } from "../redusx/action";

const FetchComponent = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const dispatch = useDispatch();
  let searchQuery = useSelector((state) => state.search.content);

  const createSearch = async () => {
    console.log(searchQuery, `searchquery`);
    if (searchQuery.length > 3) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
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
          let result = await response.json();
          let { data } = result;
          console.log(data, `data e qui`);
          // for (let x = 0; x < data.length; x++) {
          setDataSearch(data);
          // }
        } else {
          throw new Error("error in search");
        }
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  useEffect(() => {
    createSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return dataSearch.map((elem, i) => {
    return (
      <Col key={i} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-5  ">
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

export default FetchComponent;
