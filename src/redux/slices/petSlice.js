import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pets: [
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: 4,
      weight: 28,
      healthScore: 86,
      vaccination: "Up to date",
      nextCheckup: "02 Sep 2026",
      emoji: "🐕",
    },
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Persian",
      age: 2,
      weight: 4.5,
      healthScore: 91,
      vaccination: "Up to date",
      nextCheckup: "08 Sep 2026",
      emoji: "🐈",
    },
  ],
};

const petSlice = createSlice({
  name: "pets",

  initialState,

  reducers: {
    addPet: (state, action) => {
      state.pets.push(action.payload);
    },

    deletePet: (state, action) => {
      state.pets =
        state.pets.filter(
          (pet) =>
            pet.id !== action.payload
        );
    },

    updatePet: (state, action) => {
      const index =
        state.pets.findIndex(
          (pet) =>
            pet.id === action.payload.id
        );

      if (index !== -1) {
        state.pets[index] =
          action.payload;
      }
    },
  },
});

export const {
  addPet,
  deletePet,
  updatePet,
} = petSlice.actions;

export default petSlice.reducer;