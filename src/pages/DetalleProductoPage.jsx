import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderDetalleProducto from "../components/shared/HeaderDetalleProducto";

export const DetalleProductoPage = () => {
	useEffect(() => {
		const resetScrollPosition = () => {
			window.scrollTo(0, 0);
		};
		// Restablecer la posición del scroll cuando se carga una nueva página
		resetScrollPosition();
	}, []);
    const [data] = useState([
        {
          id: '1',
          titulo: 'RELOJES',
          subTitulo: 'Sistemas de Control / Control de Asistencia - Acceso',
          destacar: 'Garantia por 2 años',
          imagen_ppal: '/imagenes/Productos/Relojes_Ejemplo.webp',
          categoria: 'RELOJES',
          info: 'La unidad MB360 ha sido diseñada con tecnología biométrica de reconocimiento de huellas, facial y/o tarjeta de proximidad para control Horario.Es un dispositivo versátil, veloz que permite combinar ambas tecnologías de reconocimiento, pudiendo reconocer hasta 1.500 rostros, 2.000 huellas, 2.000 tarjetas y 100.000 transacciones. La interfaz de uso del MB360 es sumamente amigable y fácil de utilizar, vinculándose con el usuario a través de una pantalla TFT color de 2.8”. Su comunicación es a través de TCP/IP y USB.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen3: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '2',
          titulo: 'CENTRALES',
          subTitulo: 'Centrales Telefónicas',
          imagen: '/imagenes/Productos/Centrales_Ejemplo.jpg',
          categoria: 'CENTRALES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '3',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '4',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '5',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '6',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '7',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '8',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
        {
          id: '9',
          titulo: 'CARTELES',
          subTitulo: 'Carteles Electrónicos / Combinados',
          imagen: '/imagenes/Productos/Carteles_Ejemplo.webp',
          categoria: 'CARTELES',
          info: 'Reloj de control con alta prestacion.',
          imagen1: '/imagenes/Productos/Relojes_Ejemplo.webp',
          imagen2: '/imagenes/Productos/Relojes_Ejemplo.webp',
        },
      ]);

	const { id } = useParams();

	const item = data.find((item) => item.id === id);
	console.warn('item', item);
	return (
		<><HeaderDetalleProducto item={item}></HeaderDetalleProducto>
		
			<div className='lg:h-full xl:h-full h-full w-full items-center justify-center'>
				<div className='container px-4 py-24 mx-auto text-gray-600 lg:h-screen xl:h-screen h-full w-full items-center justify-center'>
					<div className='px-5 mx-auto'>
						<div className='lg:w-4/5 xl:w-4/5 mx-auto flex flex-wrap'>
							<img
								alt='ecommerce'
								className='lg:w-1/2 xl:w-1/2 w-full lg:h-auto h-50 object-cover object-center rounded'
								src={`${item.imagen_ppal}`}
							/>
							<div className='lg:w-1/2 xl:w-1/2 w-full items-center lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-gray-200 rounded'>
								<h2 className='text-sm title-font text-gray-500 tracking-widest'>
									{item.subTitulo}
								</h2>
								<motion.h1
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 },
									}}
									className='text-gray-900 text-3xl title-font font-medium mb-1'>
									{item.titulo}
								</motion.h1>
								<div className='flex mb-4'>
									<span className='flex items-center'>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<motion.span
											initial='hidden'
											whileInView='visible'
											viewport={{ once: true, amount: 0.5 }}
											transition={{ delay: 0.2, duration: 0.5 }}
											variants={{
												hidden: { opacity: 0, x: -50 },
												visible: { opacity: 1, x: 0 },
											}}
											className='text-gray-600 ml-3'>
											{item.destacar}
										</motion.span>
									</span>
								</div>
								<motion.p
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 },
									}}
									className='leading-relaxed'>
									{item.info}.
								</motion.p>
							</div>
						</div>
					</div>
				</div>
				<div id="seccionDetalles" className='text-gray-600 mt-4 body-font'>
					<div className='container px-5 py-4 mx-auto'>
						<div className='flex flex-col text-center w-full mb-6'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								{' '}
								Más detalles:{' '}
							</h1>
						</div>
						<div className='flex flex-wrap -m-4'>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src={`${item.imagen1}`}
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-blue-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											The Catalyzer
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src={`${item.imagen2}`}
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-blue-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											The 400 Blows
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/3 sm:w-1/2 p-4'>
								<div className='flex relative'>
									<img
										alt='gallery'
										className='absolute inset-0 w-full h-full object-cover object-center'
										src={`${item.imagen3}`}
									/>
									<div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
										<h2 className='tracking-widest text-sm title-font font-medium text-blue-500 mb-1'>
											THE SUBTITLE
										</h2>
										<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
											Neptune
										</h1>
										<p className='leading-relaxed'>
											Photo booth fam kinfolk cold-pressed sriracha leggings
											jianbing microdosing tousled waistcoat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:w-screen xl:w-screen w-full items-center lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-gray-200 rounded'>
								<h2 className='text-sm title-font text-gray-500 tracking-widest'>
									{item.subTitulo}
								</h2>
								<motion.h1
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 },
									}}
									className='text-gray-900 text-3xl title-font font-medium mb-1'>
									{item.titulo}
								</motion.h1>
								<div className='flex mb-4'>
									<span className='flex items-center'>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='currentColor'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<svg
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-4 h-4 text-blue-500'
											viewBox='0 0 24 24'>
											<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
										</svg>
										<motion.span
											initial='hidden'
											whileInView='visible'
											viewport={{ once: true, amount: 0.5 }}
											transition={{ delay: 0.2, duration: 0.5 }}
											variants={{
												hidden: { opacity: 0, x: -50 },
												visible: { opacity: 1, x: 0 },
											}}
											className='text-gray-600 ml-3'>
											{item.destacar}
										</motion.span>
									</span>
								</div>
								<motion.p
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.5 }}
									transition={{ delay: 0.2, duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										visible: { opacity: 1, x: 0 },
									}}
									className='leading-relaxed'>
									{item.info}.
								</motion.p>
				</div>
			</div>
		</>
	);
};

