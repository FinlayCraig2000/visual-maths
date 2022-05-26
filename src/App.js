import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { FooterBar } from "./components/FooterBar";
import { Home } from './pages/Home';
import { BasicMaths } from './pages/BasicMaths';
import { ErrorPage } from './pages/ErrorPage';
import { AdvancedMaths } from "./pages/AdvancedMaths";
import { linkPathsTypeface } from "./helper/pathsTypeface";
import './App.css';

export default class App extends React.Component {
    render() {
        return (
          <Router>
            <div className="App">
              <NavigationBar />
              
              <Routes>
                <Route path={`${linkPathsTypeface.OldDefault}`} element={<Home />}/>
                <Route path={`${linkPathsTypeface.GitHubPages}`} element={<Home />}/>
                <Route path={`${linkPathsTypeface.Default}`} element={<Home />}/>
                <Route path={`${linkPathsTypeface.BasicMaths}`} element={<BasicMaths />}/>
                <Route path={`${linkPathsTypeface.AdvancedMaths}`} element={<AdvancedMaths/>}/>
                <Route path={`${linkPathsTypeface.ErrorPage}`} element={<ErrorPage />} />
              </Routes>

              <FooterBar />
            </div>
          </Router>
        )
    }
}