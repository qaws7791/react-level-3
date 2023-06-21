import React, { useEffect, useRef, useState } from 'react'
import { styled, css } from 'styled-components';
import { GrDown, GrUp } from 'react-icons/gr'

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 300px;
  text-align: left;
`

const SelectButton = styled.button`
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.4rem 1.4rem;
  cursor: pointer;

  ${(props) => 
    props.open &&
    css`
      border-radius: 1rem 1rem 0 0;
    `
  }
`

const SelectList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  position: absolute;
  z-index: 100;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  overflow: hidden;
`

const SelectItem = styled.li`
  background-color: #fff;
  padding: 0.4rem 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  
`

const OpenStatusIcon = styled.span`
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  position: absolute;
  right: 0.4rem;
  align-items: center;
`

const Select = ({onChange, defaultValue, options}) => {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const selectButtonRef = useRef(null);
  const selectListRef = useRef(null);
  const selectContainerRef = useRef(null);

  const handleClickSelectButton = () => {
    setOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleKeyDownList = (e) => {
    if(e.keyCode === 9){ // Tab Key Down 
      if(e.target === e.currentTarget.lastChild) {
        e.preventDefault();
        e.currentTarget.firstChild.focus();
      }
    } else if (e.keyCode === 27) { // escape Key Down
      selectButtonRef.current.focus();
    }
  }

  const handleKeyDownItem = (e,index) => {
    if(e.keyCode === 13) {
      selectItem(index)
    }
  }

  const selectItem = (index) => {
    setSelected(options[index]);
    setOpen(false);  
    if(onChange) setTimeout(()=>onChange(options[index]),0)
  }

  useEffect(() =>{
    function handleClickOutSide(e) {
      if(selectListRef.current && !selectContainerRef.current.contains(e.target)) {
        console.log('close')
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutSide)
    return ()=> document.removeEventListener('mousedown',handleClickOutSide)
  },[selectListRef])

  return (
    <StyledContainer ref={selectContainerRef}>
    <SelectButton aria-label='선택 목록을 열고 닫는 버튼' onClick={handleClickSelectButton} ref={selectButtonRef} open={isOpen}>
      {selected}
      <OpenStatusIcon>
        {isOpen ? <GrUp/> : <GrDown/>}
      </OpenStatusIcon>
    </SelectButton>
    {isOpen && 
    <SelectList ref={selectListRef} tabIndex='-1' onKeyDown={handleKeyDownList}>
      {options.map((item,i) => 
      <SelectItem 
        key={i} 
        tabIndex='0' 
        onKeyDown={(e) => handleKeyDownItem(e,i)} 
        onClick={(e) => selectItem(i)}
      >{item}</SelectItem>
      )}
    </SelectList>}
    </StyledContainer>
  )
}

export default Select