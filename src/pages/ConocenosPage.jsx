import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeaderBasico from "../components/shared/Header_Basico";

export const ConocenosPage = () => {
  useEffect(() => {
		const resetScrollPosition = () => {
			window.scrollTo(0, 0);
		};
		// Restablecer la posición del scroll cuando se carga una nueva página
		resetScrollPosition();
	}, []);

  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState('quienesSomos');

  // Contenido basado en la pestaña activa
  const renderContent = () => {
    switch (activeTab) {
      case 'quienesSomos':
        return (
          <p className="leading-relaxed mb-4">
            MULTITEL es una empresa joven que nació como resultado de un profundo análisis del mercado de las Comunicaciones, Control de Personal y Seguridad Industrial, donde se visualizaron necesidades reales de soluciones y herramientas de alta tecnología para satisfacer este mercado. Se tuvo en cuenta, además, el aprovechamiento de una probada experiencia de nuestros principales proveedores en cada rubro, en lo que refiere a desarrollos de soluciones y aplicaciones tecnológicas.
          </p>
        );
      case 'nuestraMision':
        return (
          <p className="leading-relaxed mb-4">
            Nuestra misión es proporcionar soluciones tecnológicas avanzadas que optimicen el control de personal, las comunicaciones y la seguridad industrial, adaptándonos a las necesidades cambiantes del mercado y garantizando la máxima satisfacción de nuestros clientes.
          </p>
        );
      case 'Recursos Humanos':
        return (
          <p className="leading-relaxed mb-4">
            Detalles adicionales sobre nuestra empresa y servicios ofrecidos se pueden encontrar en nuestras diferentes secciones. Contamos con un equipo altamente capacitado y tecnologías de punta para asegurar la mejor calidad en cada proyecto.
          </p>
        );
      default:
        return null;
    }
  };

  return (
      <section className="landscapes:h-full h-full w-full text-gray-600 body-font overflow-hidden">
      <HeaderBasico />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Distribuidor oficial CRONOS</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Multitel</h1>
              <div className="flex mb-4">
                <a
                  className={`flex-grow py-2 text-lg px-1 cursor-pointer ${activeTab === 'quienesSomos' ? 'text-blue-500 border-b-2 border-blue-500' : 'border-b-2 border-gray-300'}`}
                  onClick={() => setActiveTab('quienesSomos')}
                >
                  ¿Quiénes Somos?
                </a>
                <a
                  className={`flex-grow py-2 text-lg px-1 cursor-pointer ${activeTab === 'nuestraMision' ? 'text-blue-500 border-b-2 border-blue-500' : 'border-b-2 border-gray-300'}`}
                  onClick={() => setActiveTab('nuestraMision')}
                >
                  ¿Nuestra Misión?
                </a>
                <a
                  className={`flex-grow py-2 text-lg px-1 cursor-pointer ${activeTab === 'Recursos Humanos' ? 'text-blue-500 border-b-2 border-blue-500' : 'border-b-2 border-gray-300'}`}
                  onClick={() => setActiveTab('Recursos Humanos')}
                >
                  Recursos Humanos
                </a>
              </div>
              {renderContent()}
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                {/* Puedes agregar contenido adicional aquí */}
              </div>
            </div>
            {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/QuienesSomos.jpg"
            /> */}
             <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.5, duration: 0.7 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
        className="xl:w-1/2 lg:w-1/2 w-full h-full flex w-full justify-center items-center p-1 mt-5 object-center">
           <img loading="lazy" className="w-1/2 h-1/2 items-center m-1" src="./Logo_Multitel.webp" />
             {/* <p className="text-8xl text-black"> <b>Multi</b> </p>
            <p className="text-8xl text-Multitel"> <b>Tel</b> </p>           */}
        </motion.div>
          </div>
        </div>
      </section>
  );
};
