import { useForm } from "../../Hooks/useForm";



export const SearchScreen = () => {

  const [formValues, handleInputChange, reset] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    reset()
  };
  
  return (
    <>
      <h1>Search results</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr/>

          <form onSubmit={ handleSearchSubmit }>
            <input 
              type='text'
              placeholder="Type your hero"
              className="form-control mt-3"
              name='searchText'
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-outline-primary mt-3"
                onClick={ handleSearchSubmit }
              >
                Search
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  )
}
