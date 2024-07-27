import PropTypes from "prop-types";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} style={buttonStyle} aria-label="Contactar por WhatsApp">
      <img src="/whatsApp.png" alt="WhatsApp" style={iconStyle} />
    </button>
    
  );
};

const buttonStyle = {
  position: 'fixed',        // Posición fija
  bottom: '60px',           // Espaciado desde la parte inferior
  right: '60px',            // Espaciado desde la parte derecha
  backgroundColor: '#25D366',
  color: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '50%',      // Hacerlo circular
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,             // Asegurar que esté delante del contenido
  transition: 'transform 0.3s',
};

const iconStyle = {
  width: '60px',
  height: '60px',
};

export default WhatsAppButton;

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
