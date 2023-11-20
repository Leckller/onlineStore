import styled from 'styled-components';

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  header{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    section{
      width: 30%;
      display: flex;
      gap: 25px;
      flex-direction: column;
      label{
        display: flex;
        height: 50px;
        text-align: start;
        justify-content: start;
        align-items: center;
        h2{
          width: 80%;
        }
      }
    }
  }
`;
