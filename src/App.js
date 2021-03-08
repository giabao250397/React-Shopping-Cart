import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./features/About";
import Cars from "./features/Cars";
import Cart from "./features/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Cars} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
