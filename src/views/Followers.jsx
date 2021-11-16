import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header"
import FetchError from "../components/Home/FetchError";
import Loader from "../components/Loader";
import FollowerInfo from "../components/Followers/FollowerInfo";

// Styles
import "../styles/Followers/Followers.css"

const Followers = props => {  

    const { user } = useParams();
    const [followersData, setFollowersData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);


    
    const fetchFollowersData = async () => {

        try {
            const response = await fetch (
                `https://api.github.com/users/${user}/followers`
            );
            // console.log(response)
            const result = await response.json();
            console.log(result)
            if (result.message) {
                setError(result.message)
                setLoading(false)
            }else {
                setFollowersData(result)
                setLoading(false)
                setError(false)
            }            
            
        } catch (error) {
            console.log(error)
        }
        
    };

    useEffect(()=> {
        fetchFollowersData();
    }, []);
    

    return (
        <div>
            <Header/>

            {
                loading ? <Loader/>
                : error ? <FetchError message={error}/>
                : followersData.length > 0 ?

                <div className="main-section">
                    <h2>Followers</h2>
                    {followersData.map(follower => (
                    <FollowerInfo
                    login={follower.login}
                    avatar={follower.avatar_url}
                    repository={follower.html_url}
                    />
                    ) ) }     
                </div>
                
                

                : <h1>No followers</h1>

                
            }



        </div>
    )
}

export default Followers;