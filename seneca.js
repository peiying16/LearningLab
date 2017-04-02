// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email){

  if ( typeof(email) === 'undefined') {
    return false;
  }
  if ( typeof(email) !== 'string' ) {
    return false;
  }
  if (email==='') {
    return false;
  }

  //leading write space
  if(email[0] === ' ') {
    return false;
  }

  if(/@myseneca.ca$/.test(email) || /@senecacollege.ca$/.test(email) || /@senecac.on.ca$/.test(email)) {
    return true;
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  if (name === undefined) {
    throw new Error('undefined');
  }
  if (name === '') {
    return null;
  }
  if(/ /.test(name)) {
    return null;
  }
  if(/  /.test(name)) {
    return null;
  }
  return name.concat('@myseneca.ca');
};
