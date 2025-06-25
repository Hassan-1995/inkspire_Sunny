import { configureStore } from "@reduxjs/toolkit";
import uploadedImageReducer from "./slices/uploadedImageSlice";
import progressBarValueReducer from "./slices/progressBarSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    uploadedImage: uploadedImageReducer,
    progressBar: progressBarValueReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
