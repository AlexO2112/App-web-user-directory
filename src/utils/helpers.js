// Funciones de utilidad

/**
 * Formatea una dirección completa a partir de los componentes de dirección
 * @param {Object} address - Objeto de dirección con street, suite, city y zipcode
 * @returns {string} - Dirección formateada
 */
export const formatAddress = (address) => {
  if (!address) return '';
  const { street, suite, city, zipcode } = address;
  return `${street}, ${suite}, ${city}, ${zipcode}`;
};

/**
 * Trunca un texto si excede la longitud máxima
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima permitida
 * @returns {string} - Texto truncado con puntos suspensivos si es necesario
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};
