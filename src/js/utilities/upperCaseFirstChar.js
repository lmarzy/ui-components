/*
* Function to take in a string and turn the first character into an uppercase character.
* @param {string}
*/

export default (input) => {
  if(typeof input !== 'string') return 'Not a string';

  const nonAlphaChar = input.match(/[^a-zA-Z\d\s:]/);

  if(nonAlphaChar) {
    const words = input.split(nonAlphaChar);

    const upperCaseWords = words.map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    return upperCaseWords.join(nonAlphaChar);
  }else {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }
};
