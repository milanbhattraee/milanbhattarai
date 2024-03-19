import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./ExplorePlaces/PlacesSlice";

const trabelivStore = configureStore({
  reducer: {
    explorePlaces: placesSlice.reducer,
    
  }
});

export default trabelivStore;