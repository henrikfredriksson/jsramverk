import React, { useState } from 'react'

/**
 * Component for name field
 *
 * @param {*} { data, setData, handleOnFocus, handleOnBlur }
 * @returns
 */
export default function NameField({ data, setData, handleOnBlur }) {
  const [nameChanged, setNameChanged] = useState(false)

  const handleOnChangeName = e => {
    setNameChanged(true)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <label htmlFor="name">Namn:
          <br />
          <i className="fa fa-user icon" />
          <input
            className={nameChanged ?
              data.name ? 'input-field validField'
                : 'input-field invalidField'
              : 'input-field '}
            type="text"
            name="name"
            onChange={handleOnChangeName}
            // onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            required
          />
          {nameChanged ?
            data.name ? <p>&nbsp;</p>
              : <p className="name-email-requirements">Vänligen fyll i namn</p>
            : <p>&nbsp;</p>}
        </label>
      </div>
    </>
  )
}
