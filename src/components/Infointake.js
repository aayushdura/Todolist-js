import { BrowserRouter as Router, useHistory } from "react-router-dom";
const Infointake = (props) => {
  const history = useHistory();
  const info = {};
  const handleChange = (event) => {
    info.title = event.target.value;
  };
  const handleUpdate = (event) => {
    info.date = event.target.value;
  };

  return (
    <Router>
      <div>
        <form
          className="container"
          onSubmit={(event) => event.preventDefault()}
        >
          <h1>WeLcOmE</h1>
          <input
            type="text"
            className="namebar"
            placeholder="Enter your Name"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            className="datebar"
            placeholder="Date"
            required
            onChange={handleUpdate}
          />
          <button
            type="submit"
            className="subbtn"
            onClick={() => {
              props.handleSubmit(info);
              history.push("/List");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Router>
  );
};

export default Infointake;
