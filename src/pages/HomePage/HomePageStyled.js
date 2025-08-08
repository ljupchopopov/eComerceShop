import styled from "styled-components";


export const Container = styled.div`

margin: 0 auto;
margin-left: 40px;

.cardContainerShowed {
      display: flex;
  flex-wrap: wrap;
  align-items: center;      
  justify-content: center;
  gap: 10px;
}

.listGrid {
  display: flex;
  justify-items: center;
  justify-content: end;
  gap: 10px;
}

  button {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    padding: 10px 20px;
    color: white;
    border-radius: 8px;  
    margin: 20px 0;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainYellow};
    }
  }

  .viewMore {
    display: flex;
    justify-content: center;
    justify-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`