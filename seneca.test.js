// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for student myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns true for perfessor myseneca address', function() {
    var simpleEmail = 'david.humphrey@senecacollege.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns true for senecac address', function() {
    var simpleEmail = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for not string', function() {
    var email = 1;
    expect(seneca.isValidEmail(email)).toBe(false);
  });

  test('returns false for not undefine', function() {
    expect(seneca.isValidEmail(undefined)).toBe(false);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = "mshaw";
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('name contains space', function() {
    var name = "asd asd";
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });

  test('name contains tab', function() {
    var name = "asd" + \t +"asd";
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });

  test('name is empty', function() {
    var name = "";
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });
});
