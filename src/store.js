import {loadState ,saveState} from "./local_storage";
import rootReducer from "./reducers/index";
import { createStore } from "redux";
const persistedState=loadState();
const store = createStore(rootReducer,persistedState);
store.subscribe(()=>{
  saveState(store.getState());
  console.log("State is :");
  console.log(store.getState())
})
export default store;
