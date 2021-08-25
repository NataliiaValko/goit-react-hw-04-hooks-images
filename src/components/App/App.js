import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Gallery from "../Gallery";
import Searchbar from "../Searchbar";
import apiPixabay from "../../service/image-api";
import Container from "../Container";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "../Loader";
import s from "./App.module.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
  MORE_LOAD: "moreLoad",
};

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    error: "",
    status: Status.IDLE,
    total: null,
    showModal: false,
    urlModal: "",
    onLoading: false,
  };

  onGetImages(query, page) {
    apiPixabay
      .fetchImage(query, page)
      .then(({ hits, total }) => {
        this.setState({
          images: [...this.state.images, ...hits],
          total: total / 12 > 500 ? 500 : total / 12,
        });

        hits[0]
          ? this.setState({ status: Status.RESOLVED })
          : this.setState({
              status: Status.REJECTED,
              error:
                "We couldn’t find anything =/. Change your request, please!",
            });
      })
      .catch((txt) => {
        this.setState({ status: Status.REJECTED, error: `${txt}` });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const newQuery = this.state.query;
    const newPage = this.state.page;

    if (prevState.query !== newQuery) {
      this.setState({ status: Status.PENDING, error: "", images: [], page: 1 });
      this.onGetImages(newQuery, newPage);
    }

    if (prevState.page !== newPage) {
      this.setState({ error: "" });
      this.onGetImages(newQuery, newPage);
    }

    if (!this.state.showModal && !prevState.showModal) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  openModal = (url) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      urlModal: url,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      urlModal: "",
    }));
  };

  toggleOnLoading = () => {
    this.setState(({ onLoading }) => ({ onLoading: !onLoading }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  handleIncrement = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const {
      query,
      images,
      page,
      error,
      status,
      total,
      onLoading,
      showModal,
      urlModal,
    } = this.state;

    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <section className={s.gallery}>
          <Container>
            {status === "idle" && (
              <p className={s.gallery__request}>Please, enter your request!</p>
            )}
            {status === "pending" && <Loader />}
            {status === "rejected" && (
              <p className={s.gallery__error}>Oops! {error}</p>
            )}
            {status === "resolved" && (
              <>
                <p className={s.gallery__text}>
                  Results on request of "{query}"
                </p>
                <ImageGallery
                  images={images}
                  openModal={this.openModal}
                  toggleOnLoading={this.toggleOnLoading}
                />
                {page < total && (
                  <Button handleIncrement={this.handleIncrement} />
                )}
              </>
            )}
          </Container>
        </section>

        {showModal && (
          <Modal onClose={this.closeModal}>
            {onLoading && <Loader />}
            <img
              onLoad={this.toggleOnLoading}
              src={urlModal}
              alt=""
              className={s.modal__image}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
