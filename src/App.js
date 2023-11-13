import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavbarMenu from "./Components/NavbarMenu";
import MainContent from "./Components/MainContent";
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
    return (
        <Auth0Provider
            domain="dev-szzarm85ogqj8spk.us.auth0.com"
            clientId="a0VrBxIJmSHUcreTLRYs4FESLHYQTfIR"
            authorizationParams={{
            redirect_uri: "http://localhost:3000/job-hunt-tracker"
            }}
        >
            <Router basename="/job-hunt-tracker">
                <div className="App">
                    <div>
                        <NavbarMenu />
                    </div>
                    <div className="content-container">
                        <MainContent />
                    </div>
                </div>
            </Router>
        </Auth0Provider>
  );
}

export default App;
