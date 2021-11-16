import "../../styles/Home/FetchError.css"

const FetchError = ({message}) => {
    return (
        <div className="error-warning">
            <p>{message} </p>
        </div>
    )
}

export default FetchError;