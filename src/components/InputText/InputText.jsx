import React from 'react'
import { styled } from 'styled-components'


const StyledInputText = styled.input`
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  border: 1px solid black;
  border-radius: 0.6rem;
`

const InputText = ({ onChange, value, placeholder, name, ...props }) => {
  return (
    <StyledInputText 
      type='text' 
      name={name}
      onChange={onChange} 
      value={value} 
      placeholder={placeholder}
      {...props}
    />
  )
}

export default InputText