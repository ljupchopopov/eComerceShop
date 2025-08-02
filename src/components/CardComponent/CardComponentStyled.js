import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;

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
`;
