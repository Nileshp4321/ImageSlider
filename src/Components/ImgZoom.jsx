import React, { useRef, useState } from "react";

const ImgZoom = ({ urlImg, closed,allImages }) => {
  const zoomedImg = useRef();
//   const [zoomRange, setZoomRange] = useState(0);
  const [zoomPercentage, setZoomPercentage] = useState(1);
//   console.log(allImages[0].url)
//   const zoomInAndOut = (e) => {
//     setZoomRange(e.target.value);
//   };
  const zoomIn = () => {
    if (zoomPercentage <= 2) {
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
                  <div className="mt-2 overflow-hidden" onScroll={(e)=>{
                    // console.log(e.target)
                    // e.target.children[0].style.justifyContent="center";
                    // e.target.style.width="800px";
                    // e.target.style.height="600px";
                  }}>
                    <img
                      src={urlImg}
                      ref={zoomedImg}
                      className=" object-cover w-[640px] h-[400px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center p-5">
                <h1
                  className="zoomEffect  text-7xl mb-8 mr-2 "
                  onClick={zoomOut}
                >
                  -
                </h1>
                <h1
                  className="zoomEffect  text-7xl mb-8 ml-2 "
                  onClick={zoomIn}
                >
                  +
                </h1>
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
