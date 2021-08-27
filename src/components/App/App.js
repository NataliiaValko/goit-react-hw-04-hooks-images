import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  LOADING: "loading",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(Status.IDLE);
  const [total, setTotal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [urlModal, seUrlModal] = useState("");
  const [onLoading, setOnLoading] = useState(false);

  const onGetImages = (query, page) => {
    if (query === "") return;

    apiPixabay
      .fetchImage(query, page)
      .then(({ hits, total }) => {
        setImages([...images, ...hits]);
        setTotal(total / 12 > 500 ? 500 : total / 12);

        hits[0] ? setStatus(Status.RESOLVED) : setStatus(Status.REJECTED);

        !hits[0] &&
          setError(
            "We couldn’t find anything =/. Change your request, please!"
          );
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((txt) => {
        setStatus(Status.REJECTED);
        setError(`${txt}`);
      });
  };

  useEffect(() => {
    if (status === Status.IDLE) {
      return;
    }

    if (status === Status.LOADING) {
      setError("");
      setStatus(Status.PENDING);
      onGetImages(query, page);
    }

    if (status !== Status.LOADING) {
      setError("");
      onGetImages(query, page);
    }
  }, [query, page]);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const toggleOnLoading = () => {
    setOnLoading(!onLoading);
  };

  const openModal = (url) => {
    toggleShowModal();
    seUrlModal(url);
  };

  const closeModal = () => {
    toggleShowModal();
    seUrlModal("");
  };

  const handleFormSubmit = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setStatus(Status.LOADING);
    setTotal(null);
  };

  const handleIncrement = () => {
    setPage(page + 1);
  };

  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit} />
      <section className={s.gallery}>
        <Container>
          {status === Status.IDLE && (
            <p className={s.gallery__request}>Please, enter your request!</p>
          )}

          {status === Status.REJECTED && (
            <p className={s.gallery__error}>Oops! {error}</p>
          )}
          {status === Status.RESOLVED && (
            <>
              <p className={s.gallery__text}>Results on request of "{query}"</p>
              <ImageGallery
                images={images}
                openModal={openModal}
                toggleOnLoading={toggleOnLoading}
              />
              {page < total && <Button handleIncrement={handleIncrement} />}
            </>
          )}
          {status === Status.PENDING && <Loader />}
        </Container>
      </section>
      {showModal && (
        <Modal onClose={closeModal}>
          {onLoading && <Loader />}
          <img
            onLoad={toggleOnLoading}
            src={urlModal}
            alt=""
            className={s.modal__image}
          />
        </Modal>
      )}
    </>
  );
};

export default App;
