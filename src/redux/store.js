import { createStoreHook } from "react-redux";
import counterReducer from "./counter/counterReducer";

const store = createStoreHook(counterReducer);

export default store;
