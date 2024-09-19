//Componentes
import Header from '../components/Header';
import Hero from '../components/SeccionHero';
import SeccionConocenos from '../components/SeccionConocenos';
import SeccionObras from '../components/SeccionObras';
import SeccionConsultanos from '../components/SeccionConsultanos';
import Footer from '../components/Footer';
import SeccionProductos from '../components/SeccionProductos';
import SeccionNovedades from '../components/SeccionNovedades';
import TituloSeccionEspecial from '../components/shared/TituloSeccionEspecial';
import { SeccionServicios } from '../components/SeccionServicios';

const HomePages = () => {
	let habilitarNovedades = false;
	let habilitarObras = false;

	return (
		<>
			<div id="Home" className="w-screen h-screen overflow-hidden relative">
				<Header />
				<Hero />
				<small className="absolute w-20 h-20 bg-black rounded-full -bottom-10 -right-10"></small>
			</div>

			{habilitarNovedades && (
				<div id="SeccionNovedades">
					<TituloSeccionEspecial />
					<SeccionNovedades />
					<small className="absolute w-20 h-20 bg-black rounded-full -bottom-10 -right-10"></small>
				</div>
			)}
			
			<div id="SeccionServicios" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative landscapes:h-full">
				<SeccionServicios />
			</div>

			<div id="SeccionProductos" className="lg:h-screen xl:h-screen w-full h-full landscapes:h-full">
				<SeccionProductos _productos={3} />
			</div>
			{habilitarObras && (
				<div id="SeccionObras" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative"
				style={{
					backgroundImage: 'url(./../imagenes/Obras/SeccionObras.webp)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<SeccionObras />
			</div> 
			)
			}
			<div id="SeccionConocenos" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative bg-gray-200 landscapes:h-full">
				<SeccionConocenos />
			</div>

			<div id="SeccionConsultanos" className="h-1/2 lg:h-screen xl:h-screen landscapes:h-full md:h-screen w-full">
				<SeccionConsultanos />
			</div>

			<div className="h-1 bg-gray-200 rounded overflow-hidden md:mt-2">
				<div className="w-40 h-full bg-Multitel"></div>
			</div>
			<div className="h-full w-full xs:landscapes:mb-full  sm:landscapes:mb-full md:landscapes:h-full">
				<Footer />
			</div>
		</>
	);
};

export default HomePages;
