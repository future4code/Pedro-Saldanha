import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import { secondaryColor } from "../../constants/colors";
import { borderColor } from "../../constants/colors";

export const FilterContainer = styled.div`
    margin:12px;
    width:250px;
    height:400px;
    border:2px solid ${borderColor};
    
    display:flex;  
    flex-direction:column;
    box-sizing: border-box;
    padding:8px;

    h3{
        color:${primaryColor};
        margin: 0;
        padding:0;
        text-transform:uppercase;
    }

    h4{
        color:${secondaryColor};
        margin-top:8px;
        margin-bottom:4px;
        text-transform:uppercase;
    }
`


export const List = styled.ul`

    margin-top:4px;
    list-style-position: inside;
    padding:0;

`
export const ListItem = styled.li`
   padding-top:4px;
   font-size:15px;
   color:#9c9c9c;

    
    &:hover {
        color:${primaryColor};
        cursor: pointer;
    }
`