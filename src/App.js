import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const API_KEY = 'ab7b769019105abc5cf4d51e19dbfc7a';
class App extends React.Component {
    gettingWeather = async (e) => {
        // e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    };
    render(){
        return (
            <div className="App">
                <Header/>
                <Main getWeather={this.gettingWeather()}/>
            </div>
        );
    };
}

export default App;
