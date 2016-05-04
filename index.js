'use strict';


/**
 * Returns a safely URI decoded string.
 *
 * @private
 * @param {String} str - string to be decoded
 * @returns {String}   - safely decoded version of input string
 */
function _decodeSafely(str) {
  if (typeof str !== 'string') {
    str = str.toString();
  }

  var good = decodeURIComponent(str);
  while(str !== good) {
    str = decodeURIComponent(str);
    good = decodeURIComponent(good);
  }

  return good;
}


/**
 * Encodes an input string to one level of encoding.
 *
 * @public
 * @param {String} value - text to encode
 * @returns {String}     - encoded text
 */
exports.encodeURIComponent = function encode(value) {
  var decoded = _decodeSafely(value);
  return encodeURIComponent(decoded);
};


/**
 * Decodes an input string.
 *
 * @public
 * @param {String} value - text to decode
 * @returns {String}     - decoded text
 */
exports.decodeURIComponent = _decodeSafely;

