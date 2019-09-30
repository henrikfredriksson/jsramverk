import React, { useState } from 'react'

const GDPRBox = ({ data, setData }) => {
  const [checked, setChecked] = useState(false)

  const handleOnChange = e => {
    setChecked(!checked)
    setData({ ...data, gdpr: !checked })
  }

  return (
    <div>

      <label htmlFor="checkbox">
        <input

          type="checkbox"
          name="gdpr"
          checked={checked}
          onChange={handleOnChange} />
        <span>&nbsp; Jag godkänner att Emil Folino äger min själ</span>
      </label>
    </div>
  )
}




export default GDPRBox
