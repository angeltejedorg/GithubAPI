
// Styles
import "../../styles/Home/SearchForm.css"

const SearchForm = ({ handleChange, handleSearchUser }) => {

    return (
      <form action="" onSubmit={e => handleSearchUser(e)}>
            <input 
            type="text" 
            placeholder="Enter username here" 
            onChange={({target}) => handleChange(target)}/> 
            <input type="submit" value="S E A R C H" />         
      </form>
    );
  };

export default SearchForm;