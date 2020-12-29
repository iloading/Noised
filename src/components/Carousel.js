import React, { useRef, useState } from "react";
//COMPONENTS
import CarouselItem from "./CarouselItem";
//ICONS
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

function Carousel({ data, titulo }) {
  //Lógica Local de Scroll de Carrosséis

  //UseRef para scrollButtons
  const refCarrossel = useRef();
  //UseState armazena a posição atual do scroll
  const [scrollPos, setScrollPos] = useState(0);
  //Scroll Carrossel Left e Right
  const scroll = (e) => {
    if (e === "right") {
      setScrollPos(988);
      refCarrossel.current.scrollLeft = 988;
    } else {
      setScrollPos(0);
      refCarrossel.current.scrollLeft = 0;
    }
  };

  return (
    <>
      <div className="controls">
        <h2>{titulo}</h2>
        <div className="controls-botoes">
          <button onClick={(e) => scroll("left")} className="scroll">
            <KeyboardArrowLeftIcon
              className={scrollPos === 0 ? "disabled" : ""}
            />
          </button>
          <button onClick={(e) => scroll("right")} className="scroll">
            <KeyboardArrowRightIcon
              className={scrollPos >= 988 ? "disabled" : ""}
            />
          </button>
        </div>
      </div>
      <div className="carrossel" ref={refCarrossel}>
        {data &&
          data.map((item) => (
            <>
              <CarouselItem item={item} key={item.id} id={item.id} />
            </>
          ))}
      </div>
    </>
  );
}

export default Carousel;
