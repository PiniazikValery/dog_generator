import styled from 'styled-components';

export const Sky = styled.div`
    width:100%;
    height:20vh;
    background:lightblue;
`

export const Background = styled.div`
    width:100%;
    height:100%;   
`

export const Ground = styled.div`
    position: sticky;
    background:green;
    display: flex;
    flex-wrap: wrap;
    padding-left:50px;
    padding-right:50px;
    &:after{
        content: "";
        height: 200px;
    }
`