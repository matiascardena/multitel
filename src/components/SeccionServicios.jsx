import {motion }from 'framer-motion';

export const SeccionServicios = () => {
  return (
    <section className="text-black body-font h-full w-full">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20 border-3 border-Multitel p-4">
    <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              className="sm:text-3xl text-4xl font-medium title-font mb-4 text-black">Nuestros servicios</motion.h1>
      {/* <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-black">Nuestros servicios</h1> */}
      <p className="lg:w-2/3 xl:w-2/3 mx-auto leading-relaxed text-base">Único servicio técnico autorizado por <strong>Cronos S.A.I.C</strong> en Santa Fe y Zona de influencia
      <br/>Contamos con toda la línea de repuestos e insumos ORIGINALES para todos los modelos.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <i className="fas fa-store text-Multitel w-11 h-11 mb-3 inline-block"></i>
          <p className="leading-relaxed">Venta - Alquiler </p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <i className="fas fa-screwdriver-wrench text-Multitel w-11 h-11 mb-3 inline-block"></i>
          <p className="leading-relaxed ">Soporte  Técnico</p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <i className="fas fa-truck-fast text-Multitel w-11 h-11 mb-3 inline-block"></i>
          <p className="leading-relaxed">Atención a domicilio</p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <i className="fas fa-phone-volume text-Multitel w-11 h-11 mb-3 inline-block"></i>
          <p className="leading-relaxed">Mesa de ayuda</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}
