import PropTypes from "prop-types";
import { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import Container from "../Container";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.query) {
      toast.error("Please, enter your request!");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.header}>
        <Container>
          <form onSubmit={this.handleSubmit} className={s.searchForm}>
            <input
              className={s.searchForm__input}
              name="queryToSearch"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleQueryChange}
              value={this.state.query}
            />
            <button type="submit" className={s.searchForm__button}>
              <BsSearch className={s.icon} />
            </button>
          </form>
        </Container>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
