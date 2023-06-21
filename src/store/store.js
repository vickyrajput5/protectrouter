import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/rootReducer";


const store = configureStore({
    reducer:{
        root: rootReducer,
    }
})

export default store