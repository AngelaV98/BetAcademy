import React, { Component } from "react";
import axios from "axios";

import CoreTable from "../table/Table";
import Header from "../header/Header";
import Loading from "../loading/Loading";

import "./App.css";

class App extends Component {
  state = {
    currencies: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=10")
      .then(({ data: { currencies } }) => {
        this.setState({ currencies, loading: false });
      });
  }

  render() {
    const { currencies, loading } = this.state;
    return (
      <div className="App">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <CoreTable
            list={currencies}
            fields={[
              { title: "Cryptocurrency", value: "name" },
              { title: "Price", value: "price" },
              { title: "Market Cap", value: "marketCap" },
              { title: "24HChange", value: "percentChange24h" }
            ]}
          />
        )}
      </div>
    );
  }
}

export default App;
