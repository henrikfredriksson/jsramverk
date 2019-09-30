import React, { useState } from 'react'

/**
 * Validate if user entered email is valid
 *
 * Regex from https://emailregex.com/
 *
 * @params {string} email - the user entered email
 * @returns {boolean} true if email is valid, otherqise false
 */
export const validateEmail = email => {
  // eslint-disable-next-line
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  return regex.test(email)
}

export default function EmailField({ data, setData, handleOnBlur }) {
  const [emailChanged, setEmailChanged] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [emailEmpty, setEmailEmpty] = useState(false)

  const handleOnChangeEmail = e => {
    /* User has changed email */
    setEmailChanged(true)

    const email = e.target.value

    /* Aussume e-mail is non-empty and valid */
    setValidEmail(false)
    setEmailEmpty(false)

    if (email === '') {
      setEmailEmpty(true)
      setData({ ...data, email: email })
      return
    }

    if (validateEmail(email)) {
      setValidEmail(true)
      setData({ ...data, email: email })

      return
    }

    setData({ ...data, email: '' })
  }

  return (
    <>
      <label htmlFor="email">E-post:
        <br />
        <i className="fa fa-envelope icon" />
        <input type="email" name="email"
          className={emailChanged ?
            validEmail ? 'input-field validField'
              : 'input-field invalidField'
            : 'input-field '}
          onChange={handleOnChangeEmail}

          onBlur={handleOnBlur}
          required
        />

        {
          emailChanged ?
            emailEmpty ? <p className='name-email-requirements'>Vänligen fyll i giltig e-post</p> :
              validEmail ? <p>&nbsp;</p>
                : <p className='name-email-requirements' >E-post inte giltig</p> :
            <p>&nbsp;</p>
        }
      </label>
    </>
  )
}
