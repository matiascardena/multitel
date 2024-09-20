import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const SeccionConocenos = () => {
    return (
        <section className="md:h-full lg:h-screen xl:h-screen w-full overflow-hidden landscapes:h-full">
            <div className="container px-6 py-10 sm:py-24 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full h-full space-y-12 lg:w-1/2">
                        {/* Titulo */}
                        <div>
                            <motion.h1  
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 0.2, duration: 0.5 }}
                             variants={{
                               hidden: { opacity: 0, y: 50 },
                               visible: { opacity: 1, y: 0 }
                             }}
                            className="text-xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Nuestra empresa está compuesta por departamentos especializados</motion.h1>

                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 rounded-full bg-Multitel"></span>
                                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-Multitel"></span>
                                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-Multitel"></span>
                            </div>
                        </div>

                        <motion.div  
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.3, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }}
                        className="flex items-start -mx-4 ">
                            <span className="inline-block p-2 text-Multitel bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>

                            <div className="mt-1 md:mx-4 md:mt-0">
                                <h1 className="text-xl text-gray-700 dark:text-white">Dpto. de Comunicaciones</h1>
                            </div>
                        </motion.div>

                        <motion.div  
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.4, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }}
                         className="flex items-start -mx-4">
                            <span className="inline-block p-2 text-Multitel bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>

                            <div className="mt-1 md:mx-4 md:mt-0">
                                <h1 className="text-xl text-gray-700 dark:text-white">Dpto. de Control de Personal</h1>
                            </div>
                        </motion.div>
                        <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.5, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }}
                         className="flex items-start -mx-4">
                            <span className="inline-block p-2 text-Multitel bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <div className="mt-1 md:mx-4 md:mt-0">
                                <h1 className="text-xl text-gray-700 dark:text-white">Departamento de Seguridad Industrial</h1>
                            </div>
                        </motion.div>
                        <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.6, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }}                        
                         className="mt-4 ">
                            <span className="inline-block w-40 h-1 rounded-full bg-Multitel"></span>
                            <Link to="/ConocenosPage" className="inline-block rounded text-2xl hover:text-blue-400 transition-colors duration-300"><b>Ver más...</b></Link>
                            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-Multitel"></span>
                            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-Multitel"></span>
                        </motion.div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <motion.img 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.7, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }}    
                        className="w-[26rem] h-[26rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="../SeccionConocenos_Camara.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};
export default SeccionConocenos;
