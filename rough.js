   {/* <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route exact path="/Todolists">
            <Todolists userinfo={userInfo} />
          </Route>
          <Route path="/Contact" exact component={() => <h1>Contact</h1>} />
        </Switch> */}
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
              onClick={() => setUserInfo(Info)}
            >
              Submit
            </button>
            <Link className="link" to="/Todolists">
              Go to Todo
            </Link>
          </form>
        </div>
      </Router>