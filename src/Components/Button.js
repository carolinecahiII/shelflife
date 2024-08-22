import PropTypes from 'prop-types';


function Button({ link, text, type, show }) {
  const classNames = `${type} ${show}`;

  return (
    <a href={link} className={classNames}>
      <button>
          {text}
        
      </button>
    </a>
  );
}

// Setting default props
Button.defaultProps = {
  link: '#', 
  text: 'Default Text', 
  type: "default", 
  show: "show" 
};

// Defining the prop types
Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string, 
  type: PropTypes.string, 
  show: PropTypes.oneOf(["show", "hide"]),
};

export default Button;
