
/**
 * Validate if user entered password is valid
 *
 *  https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
 *
 * @params {string} password - the user entered password
 * @returns {boolean} true if password is valid, otherqise false
 */
export const validatePassword = password => {
  // eslint-disable-next-line
  // const regex =
  // /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

  // eslint-disable-next-line
  const regex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,}))/

  const noSpaces = /^\S*$/

  return regex.test(password) && noSpaces.test(password)
}

/**
 * Test if password contains a capital letter
 * @param {String} password - password to be tested
 * @return {boolean} true if password contains at least a capital letter, otherwise false
 */
export const passwordContainsUppperCaseLetter = password => {
  const regexp = new RegExp('(?=.*[A-Z])')

  return regexp.test(password)
}


/**
 * Test if password contains a capital letter
 * @param {String} password - password to be tested
 * @return {boolean} true if password contains at least a capital letter, otherwise false
 */
export const passwordContainslowerCaseLetter = password => {
  const regexp = new RegExp('(?=.*[a-z])')

  return regexp.test(password)
}



/**
 * Test if password contains n numbers
 * @param {String} password - password to be tested
 * @param {number} n - number of numbers required
 * @return {boolean} true if password contains at least n numbers, otherwise false
 */
export const passwordContainsNNumbers = (password, n = 1) => {
  const regexp = new RegExp(`(?=(.*\\d){${n}})`)



  return regexp.test(password)
}


/**
 * Test if password contains a special characters
 * @param {String} password - password to be tested
 * @return {boolean} true if password contains at least n special characters, otherwise false
 */
export const specialCharacter = password => {
  // eslint-disable-next-line
  const regexp = new RegExp('/(?=.[!@#\$%\^&])/')

  return regexp.test(password)
}



