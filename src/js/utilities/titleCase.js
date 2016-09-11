/*
* Function to take in a string and capitalise the first character of each word
* @param {string}
*/

export default (input) => {
  if(typeof input !== 'string') return 'Not a string';

  const words = input.split(' ');

  const titleCaseWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleCaseWords.join(' ');
}
