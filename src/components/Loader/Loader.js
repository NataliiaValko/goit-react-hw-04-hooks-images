import CustomLoader from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div className={s.loader}>
    <CustomLoader type="Bars" color="#5ab1e4" height={80} width={80} />
    <p className={s.loader__text}>Loading...</p>
  </div>
);

export default Loader;
