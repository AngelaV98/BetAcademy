import React, { Component } from "react";
import axios from "axios";

import Table from "../table/";
import Header from "../header/";
import Loading from "../loading/";

import "./App.css";
import ErrorIndicator from "../error-indicator";

class App extends Component {
  state = {
    currencies: [],
    loading: true,
    isError: false
  };
  componentDidMount() {
    axios
      .get("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=5")
      .then(({ data: { currencies } }) => {
        this.setState({ currencies, loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ isError: true, loading: false });
      });
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ isError: true });
  }

  render() {
    const { currencies, loading, isError } = this.state;
    return (
      <div className="App">
        <Header />
        {loading ? (
          <Loading />
        ) : isError ? (
          <ErrorIndicator />
        ) : (
          <Table
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
