import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.colors.lightGray};
height: 70px;

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
}

`