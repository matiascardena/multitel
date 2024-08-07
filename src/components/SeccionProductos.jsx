import {useEffect } from 'react';
import { Cards } from './shared/Cards';
import {motion }from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import productosDestacados from '../data/productos_destacados.json';

const SeccionProductos = ({ _productos }) => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);
  const MAXPropuestas = _productos || 3;

  return (
    <section className="text-gray-600 h-full">
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-40 h-full bg-Multitel"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-1">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Nuestros productos</motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Productos para todas las necesidades</motion.p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          
          {productosDestacados.slice(0, MAXPropuestas).map((item, index) => (
           
            <div
              key={index} className="w-full lg:w-1/3 xl:w-1/3 mt-3">
                 <Link to="/ProductosPage">
              <Cards
                item={item}
              />
                </Link>
            </div>
          
          ))}
      
          {productosDestacados.length > MAXPropuestas && (
            <div className="w-full flex justify-content-center ">
              <Link to="/ProductosPage" className="bg-AceroCorp text-white py-2 px-4 rounded">
                Ver más productos
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SeccionProductos;

SeccionProductos.propTypes = {
  _productos: PropTypes.number.isRequired,
};