// Test to check returned string is stripped of any white space

import { expect } from 'chai';
import stripWhiteSpace from '../../../src/js/utilities/stripWhiteSpace';

describe('Mocha', function() {
  it('Should return a string of text with all white space removed', function() {

    const testCases = [
      {
        before: ' spaceBefore',
        after: 'spaceBefore'
      },
      {
        before: 'spaceAfter ',
        after: 'spaceAfter',
      },
      {
        before: ' mixed spaces ',
        after: 'mixedspaces'
      },
      {
        before: 123,
        after: 'Not a string'
      }
    ];

    testCases.forEach(testCase => expect(stripWhiteSpace(testCase.before)).to.be.a('string').and.to.equal(testCase.after));

  });
});
