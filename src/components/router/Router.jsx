import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/users">
          Users
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
