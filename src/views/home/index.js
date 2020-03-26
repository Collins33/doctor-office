import React, { Component } from "react";
import Header from "../../components/header/index";
import { SideSelect } from "../../components/sideSelect/index";
import "./index.css";

class Home extends Component {
  state = {
    selectItems: [
      {
        number: "7",
        name: "Kiambu"
      },
      {
        number: "12",
        name: "Mukuru kwa Ruben"
      },
      {
        number: "26",
        name: "Mukuru kwa Njenga"
      },
      {
        number: "38",
        name: "Baba Dogo"
      },
      {
        number: "41",
        name: "Kosovo"
      },
      {
        number: "24",
        name: "Mukuru Kayaba"
      }
    ]
  };
  render() {
    const { selectItems } = this.state;
    return (
      <div>
        <Header />
        <div className="dashboard_right_container">
          <SideSelect selectItems={selectItems} />
          <div>Side</div>
        </div>
      </div>
    );
  }
}

export default Home;
