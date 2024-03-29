import React, { useState } from "react";

const AboutImg = ({closed,currentImg}) => {

  const [isDataCopied,setIsDataCopied]=useState(false);

  const copyImgURL=(e)=>{
      navigator.clipboard.writeText(e.target.innerHTML)
      navigator.clipboard.writeText(e.target.innerHTML).then(()=>{
        alert("Data is Copied SUccesfully");
      })
      .catch(()=>{
        alert("Data is Not Copied");
      })

  }

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden w-96 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xxl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 flex flex-col  justify-center  sm:ml-4 sm:mt-0 sm:text-left">
                    <h2
                      className="text-4xl m-3 font-bold text-gray-900 text-center"
                      id="modal-title"
                    >
                      Image Details
                    </h2>
                    <div className="mt-2 flex flex-col flex-wrap justify-center">
                      <label htmlFor="size" className="font-bold">Image URL :-</label>
                      <p className="text-sm m-2 text-gray-500" name="size" onClick={copyImgURL}>
                        {currentImg.url}
                      </p>
                      <label htmlFor="size" className="font-bold">Image Size :-</label>
                      <p className=" text-sm m-2 text-gray-500" name="size">
                        <b>{currentImg.imgSize+"Kb"}</b>
                      </p>
                      <label htmlFor="size" className="font-bold">Image Uploaded Date  :-</label>
                      <p className=" text-sm m-2 text-gray-500" name="size">
                        <b>{currentImg.uploadedTime}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={closed}
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutImg;

















































{/* <div
className="relative z-10"
aria-labelledby="modal-title"
role="dialog"
aria-modal="true"
>
<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3
              className="text-base font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              Deactivate account
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
               <img src={currentImg.url} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        onClick={closed}
      >
        Cancel
      </button>
      </div>
    </div>
  </div>
</div>
</div> */}
