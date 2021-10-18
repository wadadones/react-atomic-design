import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Header } from "../atoms/layout/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          Home
          <PrimaryButton>Primary Button</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
        </Route>
        <Route path="/users">
          Users
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
