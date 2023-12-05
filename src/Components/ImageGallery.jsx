import React, { useState } from "react";

const ImageGallery = () => {
  let [filesData, setFilesData] = useState([]);
  let dupfilesData=[...filesData];
  const currentTime = new Date().toLocaleString();
  const addImageToGallery = (e) => {
    // console.log(e.target.files[0].name);
    setFilesData((pre) => {
        const imgInfo={
            url:e.target.files[0].name,
            uploadedTime:currentTime
        }
      return [...pre,imgInfo];
    }); 
  };

  return (
    <div className="flex w-screen h-auto justify-center items-center">
      <div className="w-[85rem] h-auto bg-gray-200 ms-8">
        <div className="flex justify-center ">
          {/* <span><input className='appearance-none  w-96 bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='file' value="" name="uploadImg" /></span> */}
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={addImageToGallery}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="flex justify-center">
          <button className="bg-gray-800 text-white w-32 p-2 m-3 rounded">
            Add Photo
          </button>
        </span>
        {/* Cards/Image Gallery  */}
        {/* For Every Card  */}
        <div className="flex flex-row justify-center grid grid-cols-4 flex-wrap ">
          {dupfilesData.map((data, index) => {
            return (
              <>
                <div className="rounded overflow-hidden w-56 h-74 m-10 shadow-xl" key={index} onMouseOver={imgZoom}>
                  <div
                    className="flex flex-row h-64  justify-center"

                  >
                    <img
                      className="w-56 h-[15rem] m-8 "
                      src={data.url}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className=" inline-block  text-sm font-bold text-gray-700 ">
                      {<p className="text-gray-800">Uploaded Time: {data.uploadedTime}</p>}
                    </span>
                  </div>
                  <div className="m-2 flex justify-end">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" value={data.url} onClick={
                        (e)=>{
                           dupfilesData=filesData.filter((item)=>{
                            console.log(item.url)
                                // alert(e.target.value)
                                return item.url!==e.target.value
                            })
                            setFilesData(dupfilesData)
                            // console.log(dupfilesData)
                        }
                    }>
                      Delete
                    </button>
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
