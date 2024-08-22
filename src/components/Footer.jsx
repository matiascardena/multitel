
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font xs:landscapes:mt-5 sm:landscapes:mt-5 md:landscapes:mt-5">
      <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start xl:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-1">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <img src="./Logo_AceroCorp.svg" className="w-14 h-14 text-white p-2 bg-white rounded-full">
            </img> */}
            <span className="text-3xl text-black"> <b>Multi</b> </span>
            <span className="text-3xl text-Multitel"> <b>Tel</b> </span>

          </a>
        </div>
      </div>
      <div className="bg-Multitel">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row">
        <span className="text-white inline-flex text-center md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">© 2024 Multitel</span>
          <div className="text-white inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            <span> Dirección: República de Siria 3785, Santa Fe</span>
          </div>
          <div className="text-white inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            <span> Teléfono: +54 (0342) 456-0003</span>
          </div>
          <span className="inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            {/* Instagram */}
            <a className="ml-3 text-white" href="https://www.instagram.com/multitelsf/" target="_blank" rel="noopener noreferrer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            {/* Email */}
            <a className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
