import React from 'react'
import HomePageStyle from '../styles/HomePage.css'
import Background from '../components/Background'

class HomePage extends React.Component{
    render(){
        return (
            <div className="home-background">
                <Background />
                <div className="let-us"></div>
                <div className="ch"></div>
            </div>   
        );
    }
}

export default HomePage;