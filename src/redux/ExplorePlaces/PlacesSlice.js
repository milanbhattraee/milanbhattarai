import { createSlice } from "@reduxjs/toolkit";
// const placeItems =
const placesSlice = createSlice({
  name: "explorePlaces",
  initialState: [
    {
      id: 0,
      name: "Kathmandu Durbar Square",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/4a/95/ac/pashupatinath-is-the.jpg?w=1100&h=-1&s=1",
      price: 1000,
    },
    {
      id: 1,
      name: "Tirupati",
      img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4500,
    },
    {
      id: 2,
      name: "Syambhunath",
      img: "https://as1.ftcdn.net/v2/jpg/03/50/71/00/1000_F_350710026_t2W0phH9Ge6Hmk2gaKXYxeebWDHESPfB.jpg",
      price: 1350,
    },
    {
      id: 3,
      name: "Siva Dham",
      img: "https://as1.ftcdn.net/v2/jpg/01/41/19/70/1000_F_141197045_2q3e2LrHH0ucD0C0AsNjvzfPBQs3TsVL.jpg",
      price: 7000,
    },
    {
      id: 4,
      name: "Mustang",
      img: "https://images.unsplash.com/photo-1540876508220-988a11575ed6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3500,
    },
    {
      id: 5,
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 10,
    },
  ],
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});

export const placesAction = placesSlice.actions;

export default placesSlice;
