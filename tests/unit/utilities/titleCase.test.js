// Test titleCase function to check the returned string is in the title case format

import { expect } from 'chai';
import titleCase from '../../../src/js/utilities/titleCase';

describe('titleCase', function() {
  it('Should return a string of text with each word title cased', function() {

    const testCases = [
      {
        before: 'test one',
        after: 'Test One'
      },
      {
        before: 'testTwo',
        after: 'Testtwo'
      },
      {
        before: 123,
        after: 'Not a string'
      }
    ];

    testCases.forEach(testCase => expect(titleCase(testCase.before)).to.be.a('string').and.to.equal(testCase.after));

  });
});
