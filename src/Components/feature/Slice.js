import { createSlice, nanoid } from "@reduxjs/toolkit";

export const ImgGallery = createSlice({
  name: "ImgG",
  initialState: {
    imgs: [{ id: 0, img: {} }],
  },
  reducers: {
    addImgToStore: (state, action) => {
      //   console.log(state);
      //   console.log(action.payload);
      //   console.log(action.payload);
      let result = state.imgs.push({
        id: nanoid(),
        img: {
          imgUrl: action.payload.url,
          uploadedTime: action.payload.uploadedTime,
          imgSize: action.payload.imgSize,
        },
      });
      console.log(result);
    },
  },
});

export const { addImgToStore } = ImgGallery.actions;
export default ImgGallery.reducer;
