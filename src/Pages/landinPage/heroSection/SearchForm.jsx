import "./searchForm-Style.css";
const SearchForm = () => {
  return (
    <div className="container">
      <h3 className="text-dark">What is the search you need?</h3>
      <form className="form ">
        <div className="form-control">
          <label htmlFor="staticEmail2" className="text-dark fs-6">
            Rent/Sale?
          </label>
          <input
            type="text"
            // className="form-control"
            id="staticEmail2"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="inputPassword2 " className="text-dark fs-6">
            Price
          </label>
          <input
            type="text"
            // className="form-control"
            id="inputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="inputPassword2">Password</label>
          <input
            type="password"
            // className="form-control"
            id="inputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-control">
          <button className="btn btn-primary w-100">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
