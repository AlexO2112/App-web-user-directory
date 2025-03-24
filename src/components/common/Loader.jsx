/**
 * Componente de carga
 * 
 * Este componente muestra un indicador de carga animado.
 * Se utiliza mientras se esperan respuestas de la API o durante procesos asíncronos.
 * 
 * @component
 */

/**
 * Componente funcional que renderiza un spinner de carga con texto
 * @returns {JSX.Element} Elemento JSX que contiene el indicador de carga
 */
const Loader = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-3 text-lg text-gray-700">Cargando...</span>
    </div>
  );
};

export default Loader;
