import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./Style.css";
import Home from "./Home";
import Service from "./Screen/Service";
import Blog from "./Screen/Blog";
import Careers from "./Screen/Careers";
import Contact from "./Screen/Contact";
import About from "./Screen/About";
import SubService from "./Screen/SubService/Service";
import Navbar from "./Component/Navbar";
import Slider from "./Screen/Slider";
import { Redirect, Route, Switch } from "react-router";
import Talk from "./Screen/Contact/TalktoOurExperts";
import Work from "./Screen/Contact/WorkWithUs";
import Get from "./Screen/Contact/GetaQuote";
import NotFound from "./Screen/BlogCard/notFound";
import { Provider } from "react-redux";
import store from "./Redux/store";
import SubBlog from "./Screen/SubBlog/SubBlog";
import News from "./Screen/News";
import Country from "./Component/CountryCode";
import Privacy from "./Screen/privacy_policy";
import SubNews from './Screen/SubNews'

const App = () => {
  return (
    <>
      {/* <Slider /> */}

      <Provider store={store}>
        <Navbar />
        <Switch>
        
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/service" component={Service} />
          <Route exact path="/subservice" component={SubService} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/career" component={Careers} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/get" component={Get} />
          <Route exact path="/not" component={NotFound} />
          <Route exact path="/slider" component={Slider} />
          <Route exact path="/talk" component={Talk} />
          <Route exact path="/subblog" component={SubBlog} />
          <Route exact path="/news" component={News} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/subnews" component={SubNews} />
          <Redirect to="/not" />
        </Switch>
      </Provider>
    </>
  );
};

export default App;
