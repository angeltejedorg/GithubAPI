import "../../styles/Followers/FollowerInfo.css"

const FollowerInfo = ({login, avatar, repository}) => {

    return (
            <div className="follower-cointainer">
                <h1>{login}</h1>
                <img src={avatar} alt="" />
                <p>See repository below</p>
                <button><a href={repository}>Github Account</a></button>
            </div>
        
    )
}

export default FollowerInfo;