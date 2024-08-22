import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardsProduct = ({ item }) => {

    return (
        <div className="p-2 sm:mb-0 mb-2 bg-blue-200 rounded-lg justify-center items-center">
             <Link to={{ pathname: `/DetalleProductoPage/${item.id}`,state: {item} }}>
            <div className="rounded-lg h-60  xs:landscapes:h-full xs:landscapes:w-30 sm:landscapes:h-full sm:landscapes:w-30 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full " src={`${item.imagen_ppal}`} />
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{item.titulo}</p>
                <p className="text-base text-gray-400 font-normal">{item.subTitulo}</p>
            </div>
            </Link>
        </div>
    )
}

CardsProduct.propTypes = {
    item: PropTypes.shape({
        id:PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        subTitulo: PropTypes.string.isRequired,
        imagen_ppal: PropTypes.string.isRequired
    }).isRequired
};
