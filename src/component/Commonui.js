import styled from 'styled-components';


export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    text-align: center;
    letter-spacing : -0.2rem;
` 
export const Button = styled.button`
    background-color: #fff;
    border-radius: 30px;
    color: #adadad;
    border: 1px solid #929292;
    padding : 5px 20px;
    font-weight: 700;
    &.active {
        border-color: #333;
        color: #333;        
    }
`