import React from 'react'
import { styled, css } from 'styled-components'


const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 1.2rem;
  display: inline-flex;
  align-items: center;
  color: #fff;
  background-color: #80caf3;
  border: 2px solid #52819a;
  border-radius: 0.6rem;
  cursor: pointer;

  ${props => props.color === 'secondary' && css`
    background-color: #FA7070;
    border-color: #d15e5e;
  `}

  ${props => props.variant === 'outlined' && css`
    background-color: #fff;
    color: #000;
  `}

  ${props => props.fontSize === 'small' && css`
    font-size: 1rem;
  `}

  ${props => props.fontSize === 'large' && css`
    font-size: 1.6rem;
  `}
`

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`

const Button = ({onClick, color, variant,children, size, icon, ...props}) => {
  return (
    <StyledButton 
      onClick={onClick} 
      color={color}
      variant={variant}
      fontSize={size}
      {...props}
    >
      {children}
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  )
}

export default Button