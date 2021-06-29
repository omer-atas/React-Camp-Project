import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import ProductDetail from "../pages/ProductDetail";
import CardDetail from "../pages/CardDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CardDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
