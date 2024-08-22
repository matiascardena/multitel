import { useEffect } from "react";
import { motion } from 'framer-motion';

import HeaderProductosPage from "../components/shared/HeaderProductosPage";
import { CardsProduct } from "../components/shared/CardsProduct";
import productos from '../data/productos.json';


const ProductosPage = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);

  const MAXPropuestas = 99;

  return (
    <> <HeaderProductosPage></HeaderProductosPage>
      <section className="text-gray-600 h-full bg-grey-100">
        <div className="container px-4 py-16 mx-auto ">
          <div className="flex flex-col">
          <div className="w-40 h-full bg-blue-600"></div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-1 bg-grey-100">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="sm:w-2/5 sm:landscapes:hidden text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0"></motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="sm:w-3/5 sm:landscapes:w-full sm:landscapes:pl-1 leading-relaxed text-3xl text-gray-900 sm:pl-10"><strong className="text-black">Nuestros </strong><strong className="text-Multitel">Productos</strong></motion.p>
            </div>
          </div>
          <div id="seccionRelojes" className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden  mt-5">
              <div className="w-40 h-full bg-blue-600"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3 mt-2  mb-1">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Relojes</motion.h1>
            </div>
          </div>
          <div className="w-40 h-full bg-Multitel"></div>
          <div  className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {productos
              .filter(item => item.categoria === 'RELOJES')
              .slice(0, MAXPropuestas) // Toma solo los primeros MAXPropuestas elementos
              .map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2 sm:landscapes:h-1/2">
                  <CardsProduct item={item} />
                </div>
              ))}
          </div>
          <div id="seccionCamaras" className="flex flex-col mt-2">
            <div className="h-1 bg-gray-200 rounded overflow-hidden mt-5">
              <div className="w-40 h-full bg-blue-900"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-3 mt-2 mb-1">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Cámaras</motion.h1>
            </div>
          </div>
          <div  className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {productos
              .filter(item => item.categoria === 'CAMARAS')
              .slice(0, MAXPropuestas) // Toma solo los primeros MAXPropuestas elementos
              .map((item, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
                  <CardsProduct item={item} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
};

export default ProductosPage;
