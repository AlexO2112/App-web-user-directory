// Componente de pie de página
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Directorio de Usuarios. Todos los derechos reservados.
            </p>
          </div>
          <div>
            <p className="text-sm">
              Desarrollado con React, Context API, React Router, Axios y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
