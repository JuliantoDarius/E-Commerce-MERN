import propTypes from "prop-types";

const Icon = ({ image }) => {
  return (
    <span className="p-3 flex bg-blue-200 rounded-full">
      <img src={image ?? ""} alt="" width={37} />
    </span>
  );
};

Icon.propTypes = {
  image: propTypes.string,
};

export default Icon;
