import React, { useState, createRef } from 'react'

/**
 * Component for name field
 *
 * @param {*} { data, setData, handleOnFocus, handleOnBlur }
 * @returns
 */
export default function BirthdayField({ data, setData }) {
  const [birthdayChanged, setBirthdayChanged] = useState(false)

  const birthdayRef = createRef()

  const validYear = (birthday) => {
    const _birthday = birthday.replace(/\//g, '')

    if (_birthday.length >= 4) {
      const year = _birthday.substring(0, 4)

      if (parseInt(year) <= 2019 && parseInt(year) >= 0) {
        return true
      }
    }
    return false
  }

  const validMonth = (birthday) => {
    const _birthday = birthday.replace(/\//g, '')

    if (_birthday.length >= 6) {
      const month = _birthday.substring(4, 6)

      if (parseInt(month) >= 1 && parseInt(month) <= 12) {
        return true
      }
    }
    return false
  }

  const validDay = (birthday) => {
    const _birthday = birthday.replace(/\//g, '')

    if (_birthday.length === 8) {
      const day = _birthday.substring(6, 8)

      if (parseInt(day) >= 1 && parseInt(day) <= 31) {
        return true
      }
    }
    return false
  }

  const handleOnChange = e => {
    setBirthdayChanged(true)

    let birthday = e.target.value

    birthday = birthday.replace(/\//g, '')


    if (birthday.length === 8) {
      if (validYear(birthday) && validMonth(birthday) && validDay(birthday)) {
        let formatted = birthday.replace(/^(\d{4})(\d{2})(\d{2}).*/, '$1/$2/$3')

        setData({ ...data, birthday: formatted })
      }
    } else {
      setData({ ...data, birthday: e.target.value })
    }
  }

  const handleOnFocus = () => {
    birthdayRef.current.style.opacity = 1
  }

  const handleOnBlur = e => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    }

    birthdayRef.current.style.opacity = 0
  }
  const styleInvalid = { display: 'inline', color: 'red' }
  const styleValid = { display: 'inline', color: 'green' }

  return (
    <>
      <div>
        <label htmlFor="birthday">Födelsedag:
          <br />
          <i className="fa fa-birthday-cake icon" />
          <input
            className={birthdayChanged ?
              validYear(data.birthday) &&
                validMonth(data.birthday) &&
                validDay(data.birthday) ? 'input-field validField'
                : 'input-field invalidField'
              : 'input-field '}
            type="text"
            name="birthday"
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={data.birthday}
            maxLength={10}
            required
          />
        </label>
        <div
          ref={birthdayRef}
          style={{ fontSize: '16px', color: '#333' }}
          className='password-requirements'>
          <ul style={{ paddingTop: '10px' }}>Mata in födelsedatum enligt formatet
            <p style={validYear(data.birthday) ? styleValid : styleInvalid}> YYYY</p>
            <p style={validMonth(data.birthday) ? styleValid : styleInvalid}>MM</p>
            <p style={validDay(data.birthday) ? styleValid : styleInvalid}>DD</p>
          </ul>
        </div >
      </div>
    </>
  )
}
