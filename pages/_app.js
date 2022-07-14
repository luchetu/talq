import '../styles/style.css'
import { Provider } from "react-redux";
import { store } from "../utils/store/configure-store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
