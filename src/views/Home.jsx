import React, { useEffect, useState } from "react";

// Components
import Header from "../components/Header"
import SearchForm from "../components/Home/SearchForm";
import FetchError from "../components/Home/FetchError";
import PreviewUser from "../components/Home/PreviewUser";


// styles 
import "../styles/Home/Home.css"

const Home = props => { 

    const [githubData, setGithubdata] =useState();
    const [user, setUser] = useState();
    const [error, setError] = useState(false);

    const fetchGithubData = async () => {

        try {
            const response = await fetch (
                `https://api.github.com/users/${user}`
            );
            const result = await response.json();
            console.log(result)

            if (result.message) {
                setError(result.message)
            }else {
                setGithubdata(result)
                setError(false)
            }
            
        } catch (error) {
            console.log(error)
        }
        
    };

    const handleChange = ({value}) => {
        setUser(value)
        };
    
    const handleSearchUser = (e) => {
        e.preventDefault();
        fetchGithubData();
        }

    return (
        <div>
            <Header/>
            <SearchForm
                handleChange={handleChange}
                handleSearchUser={handleSearchUser}
            />

            {error ? <FetchError message={error}/> 
            
            : githubData ?

                <PreviewUser
                    login={githubData.login}
                    avatar={githubData.avatar_url}
                    name={githubData.name}
                    followers={githubData.followers}
                    following={githubData.following}
                    bio={githubData.bio}
                />

                : null

                    

            }
        </div>        
    )

}

export default Home;