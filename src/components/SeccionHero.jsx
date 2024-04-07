import { motion } from 'framer-motion';

const SeccionHero = () => {
  return (
    <section className="text-gray-600 body-font pt-10 overflow-hidden">
      <div className="flex py-24 md:flex-row md:h-full md:w-full flex-col items-center justify-center relative">
        <div className="px-5 py-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 justify-center w-full">Distribuidor oficial CRONOS</motion.h1>
          <motion.p
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 }
             }}
          className="mb-8 leading-relaxed">MULTITEL es una empresa joven que nació como resultado de un profundo análisis del mercado de las Comunicaciones, Control de Personal y Seguridad Industrial, donde se visualizaron necesidades reales de soluciones y herramientas de alta tecnología para satisfacer este mercado.</motion.p>
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 }
             }}
          className="flex items-center justify-center w-full">
            <a href="/#Consultanos" className="text-white bg-Multitel border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Consultanos</a>
          </motion.div>
        </div>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.5, duration: 0.7 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
        className="lg:max-w-lg lg:w-full md:w-1/2 flex w-full justify-center items-center p-2">
          <img className="object-cover object-center rounded" alt="hero" src="./Logo_Multitel.png" />
          
        </motion.div>
        <small className="absolute w-40 h-40 bg-Multitel rounded-full -top-20 -right-20"></small>
        
      </div>
    </section>
  );
};

export default SeccionHero;
