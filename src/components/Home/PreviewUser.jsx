import { Link } from "react-router-dom"
import "../../styles/Home/PreviewUser.css"

const PreviewUser = ({login, avatar, name, followers, following, bio}) => {


    return (
        <div className="preview-cointainer">
        <h1>{login}</h1>
        <img src={avatar} alt="" />
        <p>{name==null ? "No name indicated" : name}</p>
        <p>{followers} followers</p>
        <p>{following} following</p>
        <div className="btn-info">
        {
            followers > 0 ? 
            <button><Link to={`/${login}/followers`}>See followers</Link></button>
            :
            null
        }

        <button><Link to={`/${login}/repository`}>See projects</Link></button>


        </div>

        

        </div>
    )
}

export default PreviewUser;