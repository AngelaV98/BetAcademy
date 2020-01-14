import React, { Component } from "react";
import axios from "axios";

import Table from "../table/";
import Header from "../header/";
import Loading from "../loading/";

import "./App.css";
import ErrorIndicator from "../error-indicator";
import Pagination from "../pagination/Pagination";

class App extends Component {
  state = {
    currencies: [],
    search: [],
    totalNumber: null ,
    loading: true,
    isError: false,
    curPage: 1
  };
  onPageChange = (e)=>{
    this.setState({curPage:e.target.textContent});
     e.target.style.backgroundColor = "#444"
  }
  componentDidMount() {
      this.getAllData()
  }
  componentDidUpdate(nextProps, nextState){
    if(this.state.curPage !== nextState.curPage){
      console.log(8)

      this.getAllData()
    }
  }

  getAllData = ()=>{
    console.log(8)
    axios
        .get(`https://api.udilia.com/coins/v1/cryptocurrencies?page=${this.state.curPage}&perPage=5`)
        .then(({ data: { currencies,totalPages } }) => {
          this.setState({ currencies, search: currencies,totalNumber:totalPages, loading: false });
        })
        .catch(err => {
          console.error(err);
          this.setState({ isError: true, loading: false });
        });

  }
  componentDidCatch(error, errorInfo) {
    this.setState({ isError: true });
  }

  handleChange = (text = "") => {
    const { currencies } = this.state;
    if (text === "") {
      this.setState({ search: currencies });
      return;
    }
    const newCurrencies = currencies.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ search: newCurrencies });
  };
  render() {
    const { search, loading, isError } = this.state;

    return (
      <div className="App">
        <Header onChange={this.handleChange} />
        {loading ? (
          <Loading />
        ) : isError ? (
          <ErrorIndicator />
        ) : (
          <div>
          <Table
            list={search}
            fields={[
              { title: "Cryptocurrency", value: "name" },
              { title: "Price", value: "price" },
              { title: "Market Cap", value: "marketCap" },
              { title: "24HChange", value: "percentChange24h" }
            ]}
          />
          <Pagination count={this.state.totalNumber} onPageChange = {this.onPageChange} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
