import React, { Component } from "react";
import axios from "axios";
import cartoon_eye from "./cartoon_eye.jpg";
// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(results => results.data)
      .then(authors =>
        this.setState({
          authors: authors,
          loading: false
        })
      );
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {this.state.loading ? (
              <img src={cartoon_eye} />
            ) : (
              <AuthorsList authors={this.state.authors} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
