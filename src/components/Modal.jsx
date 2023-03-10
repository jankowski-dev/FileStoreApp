import "./../scss/main.scss";
import "./../scss/media.scss";
import AuthFormContainer from "./AuthFormContainer";

const Modal = (props) => {
  return (
    <div className={props.content.isActive === false ? "PopUp" : "PopUp PopUpActive"} onClick={() => props.setActive(false)}>
      <AuthFormContainer />
    </div>
  );
};

export default Modal;
