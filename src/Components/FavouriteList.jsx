import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { setPlayMusicAction } from "../redusx/action";

const FavoutireList = () => {
    const dispatch=useDispatch()
  const array = useSelector((state) => state.favourite.content);
  console.log(array, `array aqui`);
  return (
    <>
      <ul className="text-white list-decoration-none ps-0">
        {array.map((elem, i) => {
          return <li  onClick={() => {
            dispatch(
              setPlayMusicAction({
                title: elem.obj.title,
                artist: elem.obj.artist.name,
                id: elem.obj.id,
              })
            );
          }} className="my-1 truncate-1" key={i}>{elem.obj.title}</li>;
        })}
      </ul>
    </>
  );
};

export default FavoutireList;
