
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        index: false,
    },
    reducers: {
        handleSide: (state, action) => {
            state.index = action.payload
        }
    }
})

export default sidebarSlice.reducer
export const { handleSide } = sidebarSlice.actions