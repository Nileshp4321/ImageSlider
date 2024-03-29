import React, { useRef, useState } from "react";

const ImgZoom = ({ urlImg, closed, allImages }) => {
  const zoomedImg = useRef();
  const [zoomPercentage, setZoomPercentage] = useState(1);
  const [brightness, setBrightness] = useState(0);
  const [grayscale, setGrayscale] = useState(50);
  const [blur, setBlur] = useState(0);

  const [changeAngle,setChangeAngle]=useState(0);
  const brightnessLevel = (e) => {
    setBrightness(e.target.value);
    zoomedImg.current.style.filter = `brightness(${brightness + 50 + "%"})`;
  };
  const grayScaleLevel = (e) => {
    setGrayscale(e.target.value);
    zoomedImg.current.style.filter = `grayscale(${grayscale + "%"})`;
  };

  const blurLevel = (e) => {
    setBlur(e.target.value);
    zoomedImg.current.style.filter = `blur(${blur + "px"})`;
  };
  //   const [zoomRange, setZoomRange] = useState(0);

  //   console.log(allImages[0].url)
  //   const zoomInAndOut = (e) => {
  //     setZoomRange(e.target.value);
  //   };
  const zoomIn = () => {
    if (zoomPercentage <= 2) {
      console.log(zoomedImg.current);
      zoomedImg.current.style.transform = `scale(${zoomPercentage})`;
      setZoomPercentage((pre) => {
        return pre + 0.05;
      });
    }
  };
  const zoomOut = () => {
    if (zoomPercentage >= 0.5) {
      zoomedImg.current.style.transform = `scale(${zoomPercentage})`;
      setZoomPercentage((pre) => {
        return pre - 0.09;
      });
    }
  };
  const handleMouseEnter = (e) => {
    // e.target.style.transform=`rotate(${90}deg)`
  };
  const handleMouseLeave = (e) => {
    //  e.target.style.transform=`rotate(${90}deg)`
  };
  const clockWiseRotate=(e)=>{
    setChangeAngle((pre)=>{
      return pre+90
    })
    zoomedImg.current.style.transform=`rotate(${changeAngle}deg)`
  }
  const AntiClockWiseRotate=(e)=>{
    setChangeAngle((pre)=>{
      return pre-90
    })
    zoomedImg.current.style.transform=`rotate(${changeAngle}deg)`
  }
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto w-screen">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className=" relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={closed}
              >
                Cancel
              </button>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4  ">
              <div className="sm:flex flex justify-center    ">
                <div className="mt-3 text-center  ">
                  <div className="mt-2 overflow-hidden overflow-x-scroll overflow-y-scroll">
                    <img
                      src={urlImg}
                      alt="Some issue is there on server side"
                      ref={zoomedImg}
                      className="object-cover w-[640px] h-[400px]"
                      onMouseOver={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                      onMouseOut={handleMouseLeave}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center p-5">
                <h1
                  className="zoomEffect  text-7xl mb-8 mr-8 ml-2 "
                  onClick={clockWiseRotate}
                >
                  <img
                    alt="Some issue is there on server side"
                    src="https://www.svgrepo.com/show/533711/rotate-cw.svg"
                    width={50}
                  />
                </h1>
                <h1
                  className="zoomEffect  text-7xl mb-8 mr-2 "
                  onClick={zoomOut}
                >
                  <img
                    alt="Some issue is there on server side"
                    src="https://www.svgrepo.com/show/522350/zoom-out.svg"
                    width={50}
                  />
                </h1>
                <h1
                  className="zoomEffect  text-7xl mb-8 ml-2 "
                  onClick={zoomIn}
                >
                  <img
                    alt="Some issue is there on server side"
                    src="https://www.svgrepo.com/show/126731/zoom-in.svg"
                    width={50}
                  />
                </h1>

                <h1
                  className="zoomEffect  text-7xl mb-8 mr-2 ml-8 "
                  onClick={AntiClockWiseRotate}
                >
                  <img
                    alt="Some issue is there on server side"
                    src="https://www.svgrepo.com/show/533710/rotate-ccw.svg"
                    width={50}
                  />
                </h1>
              </div>
              <div className="flex justify-start">
                <label htmlFor="blur" className="m-4">
                  Blur Level
                </label>
                <input
                  type="range"
                  className="w-64"
                  max={20}
                  value={blur}
                  onChange={blurLevel}
                  name="blur"
                />
              </div>
              <div className="flex justify-start">
                <label htmlFor="brightness" className="m-4">
                  Brightnes Level
                </label>
                <input
                  type="range"
                  className="w-64"
                  value={brightness}
                  onChange={brightnessLevel}
                  name="brightness"
                />
              </div>
              <div className="flex justify-start">
                <label htmlFor="grayscale" className="m-4">
                  Grayscale Level
                </label>
                <input
                  type="range"
                  className="w-64"
                  value={grayscale}
                  onChange={grayScaleLevel}
                  name="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgZoom;

/**zoomg effect */
// useEffect(()=>{
//     // alert(zoomRange)
//     if (zoomRange > 50) {
//       zoomedImg.current.style.transform = `scale(${zoomPercentage})`;
//       setZoomPercentage((pre)=>{
//           return pre+0.02;
//     });
//     }
//     // alert(zoomPercentage)
//   },[zoomRange])
