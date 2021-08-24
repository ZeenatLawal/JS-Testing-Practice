function reverseString(string) {
  if (string.length > 0) {
    const reversed = string.split('').reverse().join('');
    return reversed;
  }
  return "There's nothing to reverse";
}

module.exports = reverseString;