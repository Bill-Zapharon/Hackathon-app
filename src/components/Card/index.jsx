import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-primary p-4 rounded-lg shadow-sm border border-secondary">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-secondary">{title}</h4>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="text-2xl font-bold text-textPrimary">
        {description}
      </p>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default Card;
