import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FeaturedItem} from '../constants/data'

interface FeatureState {
  feature:FeaturedItem[]
}

const initialState: FeatureState = {
  feature: [
    {
      Id: "1",
      Title: "The Irishman",
      CoverImage: "FeaturedCoverImage.png",
      TitleImage: "FeaturedTitleImage.png",
      Date: "2021-10-24T12:16:50.894556",
      ReleaseYear: "2021",
      MpaRating: "18+",
      Category: "Movie",
      Duration: 6000,
      VideoUrl:'',
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    }
  ],
};

const feature = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<FeaturedItem>) => {
      state.feature.push(action.payload);
      sessionStorage.setItem('lastClickedMovieId', action.payload.Id);
    },
    editMovie: (state, action: PayloadAction<FeaturedItem>) => {
      // const editedTask = action.payload;
      // const index = state.tasks.pending.findIndex((task) => task.id === editedTask.id);
      // if (index !== -1) {
      //   state.tasks.pending[index] = editedTask;
      // }
    },
  },
});

export const { addMovie,editMovie } = feature.actions;

export default feature.reducer;
