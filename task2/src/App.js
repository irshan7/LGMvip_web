import Navv from "./Nav/nav";
import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import "./App.css";
class App extends Component {
  state = {
    isLoading: false,
    user: [],
  };
  handleClick = () => {
    this.setState({
      isLoading: true,
    });

    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      console.log(res.data.data);

      this.setState({
        isLoading: false,
        user: res.data.data,
      });
    });
    console.log("handled");
  };
  render() {
    const listUsers = this.state.user.map((u) => (
      <div key={u.id} className="grid-content">
        <img
          src={u.avatar}
          alt={u.first_name}
          style={{ borderRadius: "50%" }}
        />
        <h6>
          Name: {u.first_name} {u.last_name}
        </h6>
        <p>Email: {u.email}</p>
      </div>
    ));
    return (
      <>
        <Navv onClick={this.handleClick} />

        {this.state.isLoading && (
          <>
            <h6>Loading...</h6>
            <ReactLoading type="spinningBubbles" color="#987" />
          </>
        )}
        <div className="grid-container">{listUsers}</div>
      </>
    );
  }
}

export default App;
