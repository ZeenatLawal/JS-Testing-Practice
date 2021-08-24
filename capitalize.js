/* eslint-disable no-throw-literal */
function capitalize(string) {
  if (string.length > 0) {
    return string[0].toUpperCase() + string.slice(1);
  }

  throw 'No character to capitalize';
}

module.exports = capitalize;