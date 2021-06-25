import styled, { keyframes } from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

export const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    justify-content: center;
    align-items:center;
    border: solid 1px black;
    border-radius: 8px;
    height:608px;
    width:400px;
    background-color:white;
`
export const StyledContainerMatches = styled.div`
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    justify-content: center;
    border: solid 1px black;
    border-radius: 8px;
    height:608px;
    width:400px;
    background-color:white;
`

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100vw;
  height:100vh;
  background-color:#CCBFBF;
`

export const Container = styled.div`
    height:88%;
    box-sizing:border-box;
    margin-top:3px;
`
export const LargeAvatar = styled(Avatar)`
    margin-right: 16px;
`
export const ListOverflow = styled(List)`
    overflow:auto;
    height:88%;
    box-sizing:border-box;
`

export const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    animation: ${rotate360} 1.2s linear infinite;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #753192;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top:180px
`;