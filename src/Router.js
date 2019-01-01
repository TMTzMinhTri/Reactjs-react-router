import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/PageCart"
import { CartProvider } from "./components/Cart";

const AppRouter = () => (
    <CartProvider>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products/" component={Products} />
                <Route path="/about/" component={About} />
                <Route path="/myCart/" component={Cart} />
            </Switch>
        </Router>
    </CartProvider>
)

export default AppRouter;