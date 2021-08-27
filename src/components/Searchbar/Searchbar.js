import PropTypes from "prop-types";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import Container from "../Container";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    !query && toast.error("Please, enter your request!");
    query && onSubmit(query);
    query && setQuery("");
  };

  return (
    <header className={s.header}>
      <Container>
        <form onSubmit={handleSubmit} className={s.searchForm}>
          <input
            className={s.searchForm__input}
            name="queryToSearch"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
            value={query}
          />
          <button type="submit" className={s.searchForm__button}>
            <BsSearch className={s.icon} />
          </button>
        </form>
      </Container>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
