import { Provider } from "react-redux";
import Router from "./Routes";
import store from "@util/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
