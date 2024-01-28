import React, { useRef, useState } from "react";
import ImgZoom from "./ImgZoom";
import AboutImg from "./AboutImg";
import { addImgToStore } from "./feature/Slice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const ImageGallery = () => {
  let [filesData, setFilesData] = useState([
    {
      url: "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
      uploadedTime: "1/27/2024, 5:01:02 PM",
      imgSize:10,
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
      uploadedTime: "1/27/2024, 5:01:02 PM",
      imgSize: 10,
    },
    {
      url: "https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A=",
      uploadedTime: "1/27/2024, 5:01:02 PM",
      imgSize: 10,
    },
  ]);
  const [infoClick, isInfoClick] = useState(false);

  // const [imgSave, setSaveImg] = useState();
  const [currImg, setCurrImg] = useState();
  let dupfilesData = [...filesData];
  //   let filteredImages = [];
  // const inputRef = useRef();
  //   const [sortBy,setSortBy]=useState("Oldest");
  const [zoomImg, setzoomImg] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  // const images = useSelector((state) => state.imgs);

  const handleMouseOver = (e) => {
    e.target.style.cursor = "zoom-in";
    setzoomImg(e.target.src);
    setIsHovered(true);
  };
  const handleMouseOut = (e) => {
    setIsHovered(false);
  };
  const handleHoverZoom=(e)=>{
    e.target.style.transform="scaleY(1.03)";
      // console.log()
  }
  const handleRemoveHoverZoom=(e)=>{
    e.target.style.transform="scale(1)";
  }
  const currentTime = new Date().toLocaleString();
  // const addImageToGallery = (e) => {
  //   // console.log(e.target.files[0].size);
  //   setFilesData((pre) => {
  //     const imgInfo = {
  //       url: e.target.files[0].name,
  //       uploadedTime: currentTime,
  //       imgSize: parseInt(e.target.files[0].size / 1024),
  //     };
  //     dispatch(addImgToStore({
  //       url: e.target.files[0].name,
  //       uploadedTime: currentTime,
  //       imgSize: parseInt(e.target.files[0].size / 1024)
  //     }))
  //     console.log(images)
  //     return [...pre, imgInfo];
  //   });
  // };
  const changeTheInputType = (e) => {
    // console.log(e.target);
    if (e.target.value.length > 0) {
      setFilesData((pre) => {
        const imgInfo = {
          url: e.target.value,
          uploadedTime: currentTime,
          imgSize: parseInt(e.target.size / 1024),
        };
        dispatch(
          addImgToStore({
            url: e.target.value,
            uploadedTime: currentTime,
            imgSize: parseInt(e.target.size / 1024),
          })
        );
        return [...pre, imgInfo];
      });
    }
  };

  //download button
  const downloadImg = (e) => {
    // const link = document.createElement('a');
    // link.href = e;
    // link.download = 'image.jpg'; // Set the download filename here
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    const link = document.createElement("a");
    link.href = e;
    link.download = "new picture.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const aboutImgInfo = (img) => {
    setCurrImg(img);
    isInfoClick(true);
  };
  const closeImgInfo = () => {
    setCurrImg("");
    isInfoClick(false);
  };
  //   const filterGallery = () => {
  //     // alert("hello")
  //     filteredImages = filesData.filter((image) => {
  //       const imagesDate = new Date(image.uploadedTime).toLocaleDateString(
  //         undefined,
  //         {
  //           year: "numeric",
  //           month: "numeric",
  //           day: "numeric",
  //         }
  //       );
  //       console.log(imagesDate);
  //       //   dupfilesData=filteredImages;
  //       return currentDate === imagesDate;
  //     });
  //   };

  return (
    <div className="flex w-screen h-auto justify-center items-center">
      <div className="w-[85rem] h-auto bg-gray-200 ms-8">
        <h1 className="text-5xl text-center m-6">Image Gallery</h1>
        <div className="flex justify-center flex-wrap">
          {/* //UPLOAD OPTION USING INPUT FILE TYPE FILE */}
          {/* <span><input className='appearance-none  w-96 bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='file' value="" name="uploadImg" /></span> */}
          {/* <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload photo
            </label>
            
          
          </div> */}
          {/* <div className="flex items-center m-2">
            <span>Or</span>
          </div> */}
          <div className="flex items-center">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image URL
              </label>

              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-800 sm:max-w-md">
                  <input
                    type="url"
                    name="username"
                    id="username"
                    autoComplete="username"
                    onBlur={changeTheInputType}
                    className="rounded flex select-none items-center pl-3 pr-5 text-gray-500 sm:text-sm block flex-1 border-0  py-1.5 pl-1 w-80 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://www.image.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className="flex flex-wrap justify-center items-center mt-5 ">
          {filesData.length > 1 ? (
            <>
              <label
                htmlFor="countries"
                className="ml-12 font-extrabold m-3 text-sm font-medium text-gray-900 dark:text-black"
              >
                Sort By :-
              </label>
              <select
                id="Sort Options"
                className="w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  //   console.log(filesData);
                  //  sortBy==="Oldest"?setSortBy("Latest"):setSortBy("Oldest")
                  if (
                    e.target.value === "Oldest" ||
                    e.target.value === "Latest"
                  ) {
                    dupfilesData = [...filesData].reverse();
                    setFilesData(dupfilesData);
                  } 
                  // else if (e.target.value === "HighToLow") {
                  //   // Sort the array based on imgSize
                  //   const sortedFilesData = [...filesData].sort(
                  //     (a, b) => a.imgSize - b.imgSize
                  //   );
                  //   console.log(sortedFilesData)
                  //   // setFilesData(sortedFilesData);
                  // }else if (e.target.value === "LowToHigh") {
                  //   // Sort the array based on imgSize
                  //   const sortedFilesData = [...filesData].sort(
                  //     (a, b) => a.imgSize + b.imgSize
                  //   );
                  //   console.log(sortedFilesData)
                  //   // setFilesData(sortedFilesData);
                  // }
                }}
              >
                {/* <option selected disabled>-----</option> */}
                {/* <option value="size">Size</option> */}
                <option value="select" disabled>
                  -------Select--------
                </option>
                <option value="Oldest">Modified By Oldest</option>
                <option value="Latest">Modified By Latest</option>
                {/* <option value="HighToLow">Modified By Size</option>
                <option value="LowToHigh">Modified By Size</option> */}
              </select>
            </>
          ) : null}
        </div>
        {/* Cards/Image Gallery  */}
        {/* For Every Card  */}
        <div className="flex flex-row justify-center flex-wrap ">
          {dupfilesData.map((data, index) => {
            return (
              <>
                <div
                  className="rounded overflow-hidden w-56 h-74 m-10 shadow-xl"
                  key={index}
                >
                  <div className="flex flex-row w-56 h-[15rem] justify-center">
                    <img
                      className="w-56 h-[15rem] m-8 object-cover"
                      src={data.url}
                      alt="This is not loading Properly due to some issue"
                      onClick={handleMouseOver}
                      onMouseOver={handleHoverZoom}
                      onMouseOut={handleRemoveHoverZoom}
                      //   onMouseLeave={handleMouseOut}
                    />
                    {isHovered && (
                      <ImgZoom
                        urlImg={zoomImg}
                        allImages={filesData}
                        closed={handleMouseOut}
                      />
                    )}
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className=" inline-block text-sm font-bold text-gray-700 ">
                      {
                        <p className="text-gray-800 mt-5">
                          Uploaded Date: {data.uploadedTime}
                        </p>
                      }
                    </span>
                  </div>

                  <div className="flex justify-center m-2">
                    <div className="m-2 flex justify-start">
                      <img
                        className="dowloadimg"
                        src="https://www.svgrepo.com/show/140007/download-button.svg"
                        // value={data.url}
                        alt="downloadbutton"
                        width={40}
                        height={30}
                        onClick={() => {
                          downloadImg(data.url);
                        }}
                      />
                    </div>
                    <div className="m-2 flex justify-end">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        value={data.url}
                        onClick={(e) => {
                          dupfilesData = filesData.filter((item) => {
                            // alert(e.target.value)
                            return item.url !== e.target.value;
                          });
                          setFilesData(dupfilesData);
                          // console.log(dupfilesData)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="m-2 flex justify-start">
                      <img
                        className="dowloadimg"
                        src="https://www.svgrepo.com/show/345223/three-dots-vertical.svg"
                        alt="downloadbutton"
                        width={40}
                        height={30}
                        onClick={() => {
                          aboutImgInfo(data);
                        }}
                      />
                      {infoClick && (
                        <AboutImg closed={closeImgInfo} currentImg={currImg} />
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

{
  /* <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"> */
}
// <div className="text-center">
// <svg
//   className="mx-auto h-12 w-12 text-gray-300"
//   viewBox="0 0 24 24"
//   fill="currentColor"
//   aria-hidden="true"
// >
//   <path
//     fillRule="evenodd"
//     d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
//     clipRule="evenodd"
//   />
// </svg>
{
  /* <div className="mt-4 flex text-sm leading-6 text-gray-600"> */
}
{
  /* <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    ref={inputRef}
                    onChange={addImageToGallery}
                  />
                </label> */
}
{
  /* <p className="pl-1">or drag and drop</p>
                </div> */
}
{
  /* <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
                  <p className="text-xs leading-5 text-gray-600 text-red-700">
                    *If Due To Security Purpose The Upload File Will Be Not Able
                    To Show So You Can Also Try To Image Url{" "}
                  </p>
              </div>
            </div> */
}
