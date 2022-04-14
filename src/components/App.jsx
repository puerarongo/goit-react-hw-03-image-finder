import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Loader from "./loader/Loader";
import Button from "./button/Button";
import Modal from "./modal/Modal";


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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({response: []});
      this.fetchFunc();
    }
    else {
      return
    }
  };

  fetchFunc = async () => {
    const { value, page } = this.state;
    const BASE_CASE = "https://pixabay.com/api/?";
    const API_KEY = "26654648-b583e9a090522ce0710c170d0";

    this.setState({status: "pending"});

    try {
      const requestImg = await fetch(`${BASE_CASE}key=${API_KEY}&q=${value}&page=${page}
      &image_type=photo&orientation=horizontal&per_page=12`);

      if (!requestImg.ok) {
        throw new Error("Error!!!")
      }

      const responseImg = await requestImg.json();
      this.createArr(responseImg);
    }
    catch (error) {
      console.log(error)
      this.setState({
        error: error,
        status: "rejected"
      })
    }
    finally {
      this.setState(prevS => { return { page: prevS.page + 1 } })
    }
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
          <Button pressMore={this.fetchFunc}/>
        )}
      </div>
    )
  };
};

export default App;
