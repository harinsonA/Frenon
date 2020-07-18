import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import NavbarLetf from "./components/navbarLeft";
import Home from "./views/home";
import Calendar from "./views/calendar";
import Users from "./views/users";
import Reports from "./views/reports";
import Graphics from "./views/graphics";
import injectContext from "./store/appContext";
import Messages from "./views/messages";
import Config from "./views/config";
import MessageDetails from "./components/componentsMessage/message-details";

function App() {

  return (
    <div className="containerApp">
      <BrowserRouter>
        <NavbarLetf />
        <Switch>
          <Route exact path="/messages/:name" component={MessageDetails} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/setting" component={Config} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
