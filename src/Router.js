import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/" component={Products} />
            <Route path="/about/" component={About} />
        </Switch>
    </Router>
)

export default AppRouter;