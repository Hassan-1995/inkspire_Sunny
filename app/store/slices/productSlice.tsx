import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  productType: string; // "T-Shirts", "Polos", "Hoodies" -- catalogItem
  productFrontPath: string | null; // change apparel color front image
  productBackPath: string; // change apparel color back image
  uploadedImageSizePrimary: string; // user uploaded design front-size
  uploadedImageSizeSecondary: string; // user uploaded design back-size
  productColor: string; // red, blue, black, green
  productSize: string; //"S", "M", "L"
  designPriceFront: number; // right now it is based on designSize -- same front and back
  designPriceBack?: number; // right now it is based on designSize -- same front and back
  productPrice: number; // constant based on apparel type
}

const initialState: ProductState = {
  productColor: "Black", //
  productSize: "S",
  productType: "",
  uploadedImageSizePrimary: "S", //
  uploadedImageSizeSecondary: "S",
  designPriceFront: 200,
  designPriceBack: 200,
  productFrontPath: null, //
  productBackPath: "", //
  productPrice: 800,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setColor(state, action) {
      state.productColor = action.payload;
    },
    setProductPath(state, action) {
      state.productFrontPath = action.payload.front;
      state.productBackPath = action.payload.back;
    },
    setUploadedImagePrimarySize(state, action) {
      state.uploadedImageSizePrimary = action.payload;
    },
    setUploadedImageSecondarySize(state, action) {
      state.uploadedImageSizeSecondary = action.payload;
    },
  },
});
export const {
  setColor,
  //   setSize,
  setUploadedImagePrimarySize,
  setUploadedImageSecondarySize,
  //   setDesignPriceFront,
  //   setDesignPriceBack,
  setProductPath,
  //   setProductPrice,
} = productSlice.actions;
export default productSlice.reducer;
