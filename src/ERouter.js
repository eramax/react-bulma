import React from "react";
import Layout from "./ui/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";

import DefaultPage from "./pages/Default";
import AboutPage from "./pages/About";
import TodayPage from './pages/Today';

export default class ERouter extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/about" component={AboutPage} />
          <Route path="/today" component={TodayPage} />
          <Route exact path="/" component={DefaultPage} />
        </Layout>
      </Router>
    );
  }
}
