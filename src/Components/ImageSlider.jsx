import React, { useEffect, useRef, useState } from "react";

const ImageSlider = (props) => {
  const [isActive, setIsActive] = useState(0);
  const [isPlay, setisPlay] = useState(true);
   
  const [status, setStatus] = useState("https://www.svgrepo.com/show/532514/pause.svg");
  let refOfTimeOut = useRef();
  const imgData = [
    "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
    "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    "https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0",
  ];
  const handlePre = () => {
    setStatus("https://www.svgrepo.com/show/532514/pause.svg");
    setIsActive(!isActive ? imgData.length - 1 : isActive - 1);
  };

  const handleNext = () => {
    setStatus("https://www.svgrepo.com/show/532514/pause.svg");
    setIsActive(isActive < imgData.length - 1 ? isActive + 1 : 0);
  };

  const pauseTheAutoSlider = () => {
    // alert(isPlay);
    if (isPlay) {
      clearTimeout(refOfTimeOut.current);
      // alert(refOfTimeOut)
      setisPlay(false);
      setStatus("https://www.svgrepo.com/show/479265/play-button.svg");
    } else {
      refOfTimeOut.current=setTimeout(() => {
        handleNext();
      }, 1000);
      setisPlay(true);
      setStatus("https://www.svgrepo.com/show/532514/pause.svg");
      clearTimeout(refOfTimeOut)
    }
    
  };
  useEffect(() => {
    refOfTimeOut.current = setTimeout(() => {
      handleNext();
    }, 1000);
    setStatus("https://www.svgrepo.com/show/532514/pause.svg");
    return(()=>{
      clearTimeout(refOfTimeOut)
    })
    // console.log(typeof refOfTimeOut)
  }, [isActive]);
  // if (isPlay) {
  //  // alert("slide Running")
  // setTimeout(() => {
  //     setisPlay(false)
  //     handleNext();
  //   }, 1000);

  // } else {
  //      //   alert("Not Paused")
  //     clearTimeout(slide);
  //     setisPlay(true);
  // }

  // return () => {
  //   clearTimeout(slide);
  //   // setisPlay(false)
  // };

  return (
    <>
      <div className="flex justify-center items-center">
        <img
          className="w-16 h-16 m-6"
          src="https://www.svgrepo.com/show/87499/left-arrow.svg"
          onClick={handlePre}
        />

        {imgData.map((data, index) => {
          return (
            <img
              key={data}
              className={
                "w-[600px] h-[600px] object-contain " +
                (isActive === index ? "block" : "hidden")
              }
              src={imgData[index]}
              alt="SlideShow "
            />
          );
        })}
        <br></br>
        <br></br>
        <img
          className="w-16 h-16 m-6"
          src="https://www.svgrepo.com/show/55208/right-arrow.svg"
          onClick={handleNext}
        />
      </div>
      <div className="flex justify-center">
         <img 
           src={status}
           className="w-16 h-16"
           onClick={pauseTheAutoSlider}
          />

      </div>
    </>
  );
};

export default ImageSlider;
