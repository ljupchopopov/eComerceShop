import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.colors.lightGray};
height: 100%;
padding: 12px 0;

@media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.lightGray};

  }

button {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    padding: 10px 20px;
    color: white;
    border-radius: 8px;
}

.mainDiv {

  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 40px;   

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}



  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    list-style-type: none;
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        margin: 10px auto 0 auto;
        padding: 0;
    } 
    
  }

  li {
  display: flex;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  transition: all 500ms ease; 
  
  :hover {
    background-color: ${({ theme }) => theme.colors.mainYellow} !important;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 150px;
    align-items: center;
    justify-content: center;
    margin: auto;

    :hover {
      background-color: ${({ theme }) => theme.colors.mainYellow};
      cursor: pointer;
    }
  }
}

  

`