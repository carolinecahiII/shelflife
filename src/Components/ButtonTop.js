import sButtonImage from '../Assets/sbutton.gif';

function ButtonTop() {
  return (
    <a href="#start" className="button-top">
      <button 
        className='default'
        style={{ 
          border: 'none',  // Remove default border
          padding: '0',  // Remove padding to fit the image exactly
          background: 'none',  // Remove background color
          cursor: 'pointer',
          position: 'relative',  // Enable positioning of text over the image
          display: 'inline-block',
          transform: 'scale(1.1)'  // Slightly increase the button size
        }}
      >
        <img 
          src={sButtonImage} 
          alt="up" 
          style={{ 
            display: 'block',  // Ensures the image takes up the full button space
            width: '100%',  // Adjusts width to fit the content area
            height: 'auto'  // Maintains aspect ratio
          }} 
        />
        <span 
          style={{ 
            position: 'absolute', 
            top: 'calc(50% - 15px)',  // Move text up by 15 pixels
            left: '50%', 
            transform: 'translate(-50%, -50%)',  // Center the text
            color: 'white',  // Text color
            fontSize: '28px',  // Adjust font size as needed
            fontWeight: 'bold',  
            fontFamily: 'VT323', 
            whiteSpace: 'nowrap'  
          }}
        >
          up
        </span>
      </button>
    </a>
  );
}

export default ButtonTop;
