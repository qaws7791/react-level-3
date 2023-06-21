import React from 'react'
import { styled } from 'styled-components'
import Button from '../Button/Button'


const StyledContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const StyledModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
`

const StyledModal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  padding: 2rem;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

const Modal = ({type='alert', closeFunc, confirmFunc, children}) => {
  return (
    <StyledContainer>
      <StyledModalBackGround onClick={type === 'alert' ? closeFunc : null}/>
      <StyledModal>
        <div>
        {children}
        </div>
        <StyledModalButtons>
          {type === 'confirm' && 
          <Button onClick={closeFunc} color='secondary'>닫기</Button>
          }
          <Button onClick= {type === 'confirm' ? confirmFunc : closeFunc}>확인</Button>
        </StyledModalButtons>
      </StyledModal>
    </StyledContainer>
  )
}

export default Modal