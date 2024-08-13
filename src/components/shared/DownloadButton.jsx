import PropTypes from "prop-types";
import swal from 'sweetalert';

const DownloadButton = ({ fileName = 'Folleto', filePath }) => {

  const handleDownload = async () => {
    try {
      
      const response = await fetch(filePath);

      if (!response.ok) {
        
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      
      const link = document.createElement('a');// Crear un enlace para descargar el archivo
      link.href = filePath;
      console.log("filePath",filePath);
      console.log("fileName",fileName);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {

      swal({
        title: "Error de descarga",
        text: `Hubo un problema al descargar el archivo`,
        icon: "error",
        button: "Cerrar",
      });
    }
  };

  return (
    <button 
      onClick={handleDownload}
      className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg"
    >
     Descargá más información
    </button>
  );
};

export default DownloadButton;


DownloadButton.propTypes = {
    fileName: PropTypes.string,
    filePath: PropTypes.string.isRequired,
 };