// Test upperCaseFirstChar to check the returned string is retuend with the first character upper cased

import { expect } from 'chai';
import upperCaseFirstChar from '../../../src/js/utilities/upperCaseFirstChar';

describe('upperCaseFirstChar', function() {
  it('Should return a string of text with the first character upper cased', function() {

    const testCases = [
      {
        before: 'alllower',
        after: 'Alllower'
      },
      {
        before: 'ALLUPPER',
        after: 'Allupper'
      },
      {
        before: 'mIxeD',
        after: 'Mixed'
      },
      {
        before: 'non-alpha',
        after: 'Non-Alpha'
      },
      {
        before: 123,
        after: 'Not a string'
      },
      {
        before: ['a', 'b', 'c'],
        after: 'Not a string'
      }
    ];

    testCases.forEach(testCase => expect(upperCaseFirstChar(testCase.before)).to.be.a('string').and.to.equal(testCase.after));

  });
});
