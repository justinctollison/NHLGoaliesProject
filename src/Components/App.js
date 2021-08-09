import {useEffect, useState} from "react"
import { Route, Switch } from "react-router-dom"
import CharacterContainer from "./CharacterContainer"
import MovieContainer from "./MovieContainer"
import Header from "./Header"
import NavBar from "./NavBar"
import Home from "./Home";
import About from "./About"

//Routing for About, Home
//better search functionality
//better styling
//placeholder pictures based on race?
//NEED MORE IDEAS

function App(){
    //set state for arrays of data after fetching API
    const [characterData, setCharacterData] = useState([])
    const [movieData, setMovieData] = useState([])

    //set search state for when typing in the search bar
    const [search, setSearch] = useState("")

    useEffect(() => {
        //fetch character metadata from API
        fetch("https://the-one-api.dev/v2/character", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer kJcWVV91XgdgiJkJu8OF"
            }
        })
            .then((response) => response.json())
                .then((data) => {
                    setCharacterData(data.docs)
                })

        //fetch movie metadata from API
        fetch("https://the-one-api.dev/v2/movie", {
            method: "GET",
            headers: {
                 "Content-Type": "application/json",
                 "Authorization": "Bearer kJcWVV91XgdgiJkJu8OF"
            }
        })
            .then((response) => response.json())
                .then((data) => {
                    setMovieData(data.docs)
                })
    }, [])

    console.log(characterData)
    console.log(movieData)

        return (
            <div className="App">
                <Header />
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/About">
                        <About />
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/Characters">
                        <CharacterContainer characterData={characterData} search={search} setSearch={setSearch}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/Movies">
                        <MovieContainer movieData={movieData} search={search} setSearch={setSearch} />
                    </Route>
                </Switch>
            </div>         
        )
    }

export default App