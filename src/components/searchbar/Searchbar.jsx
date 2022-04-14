import React, { Component } from "react";
import styles from "./Searchbar.module.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Searchbar extends Component {
    state = {
        text: "",
    };


    reset = () => { this.setState({ text: "" }) };


    inputHandler = (e) => {
        const { value } = e.currentTarget
        this.setState({ text: value.toLowerCase() });
    };


    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.text.trim() === "") {
            return Notify.warning("Please, enter the word into the search engine");
        }

        this.props.submit(this.state.text);
        this.reset();
    };


    render() {
        const { text } = this.state;

        return (
        <header className={styles.header}>
            <form className={styles.form} onSubmit={this.submitHandler}>
                <button type="submit" className={styles.button}>
                    <span className="button-label">Search</span>
                </button>
                <input
                    className={styles.form__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={text}
                    onChange={this.inputHandler}
                />
            </form>
        </header>
        );
    };
};

export default Searchbar;