import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aux from './hoc/Auxillary';
import Layout from './Containers/Layout/Layout';
import W3Shool from "./Containers/W3school/W3Shool";
import Zomato from "./Containers/zomato/Zomato";
import GreetComponent from "./Containers/GreetComponent/ThanksCard/ThanksComponent";
import OrderLists from "./Containers/zomato/OrderLists";
import PageView from "./Containers/zomato/pageView/PageView";
import './assets/style/app.css';

const App = () => {
  return (
    <Aux>
      <Router>
        <Routes>
          <Route path="/w3shool" element={<W3Shool />} />
          <Route path="/" element={<Layout />} />
          <Route path="/greetComponent" element={<GreetComponent />} />
          <Route path="zomato" element={<Zomato />}>
            <Route index element={<OrderLists />} />
            <Route path=":slug" element={<PageView />} />
          </Route>
        </Routes>
      </Router>
    </Aux>
  )
}

export default App;