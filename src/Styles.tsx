import styled from 'styled-components';

export const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    section:nth-child(1){
      width: 30%;
      display: flex;
      height: 100vh;
      overflow-y: auto;
      gap: 50px;
      flex-direction: column;
      padding: 20px;
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
    section:nth-child(2){
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      gap: 25px;
      margin-left: 20px;
    }
  }
`;

export const HomeHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ArticleCatSearch = styled.article`
  width: 250px;
  button{
    background-color: transparent;
    width: 100%;
    height: 100px;
    border: none;
    box-shadow: 3px 3px 10px black;
    border-radius: 10px;
    cursor: pointer;
    transition: 500ms;
    &:hover{
      transition: 500ms;
      transform: scale(110%);
    }
  }
`;

export const ArticleProduct = styled.article`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  box-shadow: 3px 3px 10px black;
  border-radius: 10px;
  align-items: center;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
      
    }
  }
  h2{
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 
  }
  button {
    width: 90%;
    height: 12%;
    cursor: pointer;
  }
`;
