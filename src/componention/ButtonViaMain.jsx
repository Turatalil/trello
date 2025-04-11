import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonViaMain = () => {
    const [inputBlock, setInputBlock] = useState(false)
    const [AddButtonVia, SetAddButtonVia] = useState(true)
    const clickNewInputHandler = () => {
        setInputBlock(true)
    }
    return (
        <div>
            <div >
            <AddButtonStyle onClick={clickNewInputHandler}>
                <span>+</span>
                Добавить список
            </AddButtonStyle>
            </div>
            {inputBlock && <div>
                <div><input type="text" /></div>
                <div><button>Добавить список</button><button>-</button></div>
            </div>}
        </div>
    )
}

export default ButtonViaMain


const AddButtonStyle = styled.button`
    border: 1px solid;
    margin-top: 100px;
    border-radius: 15px;    
    width: 280px;
    height: 40px;
    padding: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #d1c5c557;
    color: white;
    font-size: 18px;
    gap: 10px;
    cursor: pointer;
    margin-left: 20px;
    :hover{
        background-color: #e4dddd55;
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`