import shuffle from "../assets/playerbuttons/shuffle.png";
import back from "../assets/playerbuttons/prev.png";
import forward from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import play from "../assets/playerbuttons/play.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { addToPrefAction, removeFromPrefAction } from "../redusx/action";

const Soundbar = () => {
  let [ok, setOk] = useState(true);
  let obj = useSelector((state) => state.stateMusic.content);
  let id = useSelector((state) => state.songId.content);
  const dispatch = useDispatch();
  const check = () => {
    console.log(id);
    console.log(obj.id);
    let a;
    a = id.filter((elem) => {
      return elem === obj.id;
    });
    console.log(a, `a`);
    if (a[0] === obj.id && a !== ``) {
      setOk(true);
    } else {
      setOk(false);
    }
  };

  useEffect(() => {
    check();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obj.id, id]);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-2 offset-lg-2 d-flex">
          <div>
            <p className="mb-0 text-white">{obj.title}</p>
            <p className="mb-0 text-white">{obj.artist}</p>
          </div>
          <div className="ms-4 ">
            {ok && obj.title !== `` && (
              <p
                onClick={() => {
                  dispatch(removeFromPrefAction(obj.id));
                }}
                className="mb-0 text-white"
              >
                <BsSuitHeartFill />
              </p>
            )}
            {ok === false && obj.title !== `` && (
              <p
                onClick={() => {
                  dispatch(addToPrefAction(obj.id));
                }}
                className="mb-0 text-white"
              >
                <BsSuitHeart />
              </p>
            )}
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flwex">
                <div className="d-flex">
                  <a href="home">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="home">
                    <img src={back} alt="prev" />
                  </a>
                  <a href="home">
                    <img src={play} alt="play" />
                  </a>
                  <a href="home">
                    <img src={forward} alt="next" />
                  </a>
                  <a href="home">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soundbar;
