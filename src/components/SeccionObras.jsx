import { Link } from 'react-router-dom';
import {motion } from 'framer-motion';

const SeccionObras = () => {
  return (
    <section className="bg-black bg-opacity-50 lg:h-screen h-full w-full lg:flex lg:items-center lg:justify-center">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1,x: 0 }
           }}  
          className="flex-grow sm:pr-16 text-4xl font-medium title-font text-white">Recorré nuestras obras.</motion.h1>
          <Link to="/#" className="flex-shrink-0 text-white bg-Multitel border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg mt-10 sm:mt-0">Ver más</Link>
        </div>
        <div className="flex flex-col mt-5">
          <div className="h-1 mt-5 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-Multitel"></div>
          </div>
          <div className="flex  mt-5 flex-wrap sm:flex-row flex-col py-6 mb-6">
            <motion.h1
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.3, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }} 
            className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Descubre Nuestro Portafolio</motion.h1>
            <motion.p
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ delay: 0.4, duration: 0.5 }}
                       variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1,x: 0 }
                       }} 
            className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">Explora nuestras obras destacadas: testimonio de calidad y excelencia. Descubre nuestra experiencia en el rubro a través de una galería de proyectos emblemáticos que reflejan nuestro compromiso y profesionalismo en cada detalle.</motion.p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SeccionObras;
