import "../../styles/Repository/RepositoryInfo.css"

const RepositoryInfo = ({name, fname, url, user, rType}) => {

    return (
            <div className="repository-cointainer">
                <h1>{name}</h1>
                <p>{rType ? "Private" : "Public"}</p>
                <p>See project below</p>
                <button><a href={`https://github.com/${fname}`}>Project</a></button>
            </div>
        
    )
}

export default RepositoryInfo;