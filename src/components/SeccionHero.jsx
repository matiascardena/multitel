import { motion } from 'framer-motion';

const SeccionHero = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="flex py-12 
        xs:landscapes:flex-row xs:landscapes:py-2 
        sm:landscapes:flex-row sm:landscapes:py-2 
        md:landscapes:flex-row md:landscapes:py-2 
        md:flex-row md:h-full md:w-full sm:h-full sm:w-full flex-col items-center justify-center relative">
      
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.5, duration: 0.7 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
        className="lg:max-w-lg lg:w-full xl:w-full md:w-1/2 flex w-full justify-center items-center ">
             {/* <p className="text-8xl text-black"> <b>Multi</b> </p>
            <p className="text-8xl text-Multitel"> <b>Tel</b> </p> */}
           <img className="object-cover object-center rounded w-full h-auto landscape:w-3/4" alt="hero" src="./Logo_Multitel.webp" />
          
        </motion.div>
        <small className="absolute w-40 h-40 bg-Multitel rounded-full -top-20 -right-20"></small>
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
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 justify-center w-full">Distribuidor oficial <strong>CRONOS</strong></motion.h1>
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
            <a href="/#SeccionConsultanos" className="text-white bg-Multitel border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Consultanos</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeccionHero;
