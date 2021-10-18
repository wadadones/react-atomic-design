import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
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
