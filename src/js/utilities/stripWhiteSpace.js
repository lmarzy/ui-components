/*
* Function to take in a string and strip out any white space
* @param {string}
*/

export default (input) => {
  if (typeof input !== 'string') return 'Not a string';

  const newString = input.replace(/\s/g, "");
  return newString;
}
