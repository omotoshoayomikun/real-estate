import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

export default configureStore({
    reducer: {
        sidebar: sidebarSlice,
    }
})