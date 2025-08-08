// src/favoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";


const storedFavorites = JSON.parse(localStorage.getItem("favorite_items")) || [];
const storedTotal = Number(localStorage.getItem("favorite_unique_count")) || 0;

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    allFavorite: storedFavorites,
    favoriteTotal: storedTotal,
  },
  reducers: {
    updateFavoriteAction: (state, action) => {
      const itemIndex = state.allFavorite.findIndex(item => item.id === action.payload.id);

      if (itemIndex === -1) {
        state.allFavorite.push(action.payload);
        state.favoriteTotal++;
      } else {
        state.allFavorite.splice(itemIndex, 1);
        state.favoriteTotal--;
      }

    
      localStorage.setItem("favorite_items", JSON.stringify(state.allFavorite));
      localStorage.setItem("favorite_unique_count", state.favoriteTotal);
    },
  },
});

export const { updateFavoriteAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;
