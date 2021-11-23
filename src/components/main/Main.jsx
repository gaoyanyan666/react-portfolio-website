import React from 'react';
import Topbar from '../navbar/Navbar';
import HomePage from '../homePage/HomePage';
import AboutPage from '../aboutPage/AboutPage';
import PortfolioPage from '../portfolioPage/PortfolioPage';
import ContactPage from '../contactPage/ContactPage';
import Footer from '../footer/Footer';
import { Switch, Route, Redirect} from 'react-router-dom';

export default function Main() {
    return (
    <div className="App">
        <Topbar />
      
        <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route path ='/aboutPage' component={AboutPage} />
            <Route  path ='/portfolioPage' component={PortfolioPage} />
            <Route  path ='/contactPage' component={ContactPage} />
            <Redirect to = '/' />

        </Switch>
        <Footer />
    </div>
    )
}
