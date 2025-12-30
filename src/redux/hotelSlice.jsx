import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chambres: [
    { num: 101, type: "simple", prix: 50 },
    { num: 102, type: "double", prix: 80 },
    { num: 103, type: "suite", prix: 120 },
    { num: 104, type: "simple", prix: 55 }
  ],
  
  clients: [
    { id: 1, nom: "Yasmine HARROUDI", login: "yas_har", password: "yas123" },
    { id: 2, nom: "Zaid SAOUSAOU", login: "zaid_sao", password: "zaid456" },
    { id: 3, nom: "Aya BELGHAZI", login: "aya_bel", password: "aya789" }
  ],
  
  reservations: []
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
  
    deleteReservation: (state, action) => {
      state.reservations = state.reservations.filter(res => res.id_res !== action.payload);
    }
  }
});

export const { addReservation, deleteReservation } = hotelSlice.actions;
export default hotelSlice.reducer;