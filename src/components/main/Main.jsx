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
    <div>
        <Topbar />
      
        <Switch>
            <Route  path ='/home' render={()=><HomePage/>} />
            <Route exact path ='/aboutPage' render={()=><AboutPage/>}/>
            <Route exact  path ='/portfolioPage' render={()=><PortfolioPage/>}/>
            <Route exact  path ='/contactPage' render={()=><ContactPage/>} />
            <Redirect to = '/' />

        </Switch>
        <Footer />
    </div>
    )
}
