import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderDetalleProducto from "../components/shared/HeaderDetalleProducto";
import productos from '../data/productos.json';
import DownloadButton from '../components/shared/DownloadButton';

export const DetalleProductoPage = () => {


	useEffect(() => {
		const resetScrollPosition = () => {
			window.scrollTo(0, 0);
		};
		// Restablecer la posición del scroll cuando se carga una nueva página
		resetScrollPosition();
	}, []);


	const { id } = useParams();


	const item = productos.find((item) => item.id === id);

	return (
		<>
			<HeaderDetalleProducto item={item}></HeaderDetalleProducto>
			<div className='lg:h-screen xl:h-screen h-full w-full items-center justify-center'>
				<div className='lg:container xl:container lg:px-4 xl:px-4 py-24 text-gray-600 h-full w-full items-center justify-center'>
					<div className='lg:px-5 xl:px-5 mx-auto'>
						<div className='lg:w-4/5 xl:w-4/5 w:full mx-auto flex flex-wrap'>
							<img
								alt='ecommerce'
								className='lg:w-1/2 xl:w-1/2 w-full lg:h-auto h-50 object-cover object-center rounded'
								src={`${item.imagen_ppal}`}
							/>
							<div className='lg:w-1/2 xl:w-1/2 w-full items-center lg:pl-10 lg:py-6 xl:pl-10 xl:py-6 mt-6 lg:mt-0 bg-gray-200 rounded p-4'>
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
									className='text-gray-900 text-3xl title-font font-medium mb-1 mt-2'>
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
								{item.filePath !== "" && (
									<div id="seccionDescargas" className="w-full overflow-hidden relative mt-4 p-2 flex justify-center items-center">
										<DownloadButton filePath={item.filePath} fileName={item.fileName}></DownloadButton>
									</div>
								)}
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

