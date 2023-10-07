import PropTypes from "prop-types";
const BotonClose = ({ funcForm }) => {
  return (
    <div className="container-btn-close">
      <button onClick={funcForm} className="btn-close">
        <img src={""} alt="close Modal" />
      </button>
    </div>
  );
};
export default BotonClose;
BotonClose.propTypes = {
  isForm: PropTypes.bool,
  funcForm: PropTypes.func,
};
