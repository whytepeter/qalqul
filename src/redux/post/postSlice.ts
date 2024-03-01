import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types";

interface PostState {
  selectedPost: Post | null;
}

const initialState: PostState = {
  selectedPost: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    selectPost: (state, action: PayloadAction<Post>) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { selectPost } = postSlice.actions;

export default postSlice.reducer;
