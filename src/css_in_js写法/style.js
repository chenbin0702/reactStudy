import styled from 'styled-components';
export const AppWrapper=styled.div`
 .section
 {
  border: 1px #ccc solid;
  .title
  {
    font-size: ${props=>props.size}px;
    color: ${props=>props.color};
  } 
  .content
  {
    font-size: 20px;
    color: green;
  }
 }
`