import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import Header from "../components/Header";
import Loader from "../components/Loader";
import RepositoryInfo from "../components/Repository/RepositoryInfo"
import FetchError from "../components/Home/FetchError";

// Styles

import "../styles/Repository/Repository.css"


const Repository = props => { 

    const { user } = useParams();
    const [reposData, setReposData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchReposData = async () => {

        try {
            const response = await fetch (
                `https://api.github.com/users/${user}/repos`
            );
            // console.log(response)
            const result = await response.json();
            console.log(result)
            if (result.message) {
                setError(result.message)
                setLoading(false)
            }else {
                setReposData(result)
                setLoading(false)
                setError(false)
            }            
            
        } catch (error) {
            console.log(error)
        }
        
    };

    useEffect(()=> {
        fetchReposData();
    }, []);
    

    return (
        <div>
            <Header/>
            {
                loading ? <Loader/>
                : error ? <FetchError message={error}/>
                :
                <div className="main-section">
                    <h2>{user} Projects</h2>
                    {reposData.map(project => (
                    <RepositoryInfo
                    name={project.name}
                    fname={project.full_name}
                    url={project.owner.html_url}
                    user ={project.owner.login}
                    rType ={project.private}
                    />
                    ) ) }     
                </div>
                
                


                
            }


        </div>
    )
}

export default Repository;