import PropTypes from "prop-types";

export const CardsProduct = ({ item }) => {

    return (
        <div className="p-2 sm:mb-0 mb-2 bg-blue-200 rounded-lg justify-center items-center">
            <div className="rounded-lg h-60 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full " src={`${item.imagen}`} />
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">{item.titulo}</p>
                <p className="text-base text-gray-400 font-normal">{item.subTitulo}</p>
            </div>
        </div>
    )
}

CardsProduct.propTypes = {
    item: PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        subTitulo: PropTypes.string.isRequired
    }).isRequired
};
