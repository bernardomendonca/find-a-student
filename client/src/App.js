import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

import CreateProfileStudent from "./components/create-profile/CreateProfileStudent";
import CreateProfileFounder from "./components/create-profile/CreateProfileFounder";
import EditProfileStudent from "./components/edit-profile/EditProfileStudent";
import EditProfileFounder from "./components/edit-profile/EditProfileFounder";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";

import StudentsProfiles from "./components/profiles/StudentsProfiles";
import FoundersProfiles from "./components/profiles/FoundersProfiles";
import Profile from "./components/profile/Profile";

import "./App.css";

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());
    // Clear the current profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/students" component={StudentsProfiles} />
              <Route exact path="/founders" component={FoundersProfiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile-student"
                  component={CreateProfileStudent}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile-founder"
                  component={CreateProfileFounder}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile-student"
                  component={EditProfileStudent}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile-founder"
                  component={EditProfileFounder}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
