import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Loader from "./loader/Loader";
import Button from "./button/Button";
import Modal from "./modal/Modal";

import fetchFunc from "funcFiles/fetchFunc";

class App extends Component { 
  state = {
    response: [],
    value: null,
    page: 0,
    error: null,
    status: "idle",
    showModal: false,
    modalValue: []
  };

  // ? func
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({response: []});
      this.requestHandler();
    }
    else {
      return
    }
  };

  createArr = (value) => {
    const newArr = value.hits.map(elem => {
      return { id: elem.id, small: elem.webformatURL, big: elem.largeImageURL }
    })

    this.setState(prevState => {
      return {
        response: [...prevState.response, ...newArr],
        status: "resolved"
      }
    })
  };


  requestHandler =  () => {
    const { value, page } = this.state;

    this.setState({ status: "pending" });

    fetchFunc(value, page).then(pictures => this.createArr(pictures)).catch(error => {
      console.log(error)
      this.setState({status: "rejected"});
    })
      .finally(() => this.setState(prevS => { return { page: prevS.page + 1 } }))
  }  
  

  searchImg = (value) => {
    this.setState(prevState => {
      if (prevState.value !== value) {
        return {
          page: 1,
          value: value
        }
      }

      return { value: value }
    });
  };

  modalHandler = (id) => {
    const imgId = this.state.response.find(elem => elem.id === id)
    this.setState({ modalValue: imgId })
    this.modalOpen()
  }

  modalOpen = () => {
    this.setState({ showModal: true })
  };

  modalClose = () => {
    this.setState({ showModal: false })
  };


  // ? func
  render() {
    const { response, status, showModal, modalValue } = this.state;

    return (
      <div>
        {showModal && (
          <Modal value={modalValue} funcClose={this.modalClose}/>
        )}
        <Searchbar submit={this.searchImg} />
        
        <ImageGallery>
          <ImageGalleryItem response={response} modal={this.modalHandler} />
        </ImageGallery>

        {status === "pending" && (
          <Loader />
        )}

        {response.length > 0 && (
          <Button pressMore={this.requestHandler}/>
        )}
      </div>
    )
  };
};

export default App;
