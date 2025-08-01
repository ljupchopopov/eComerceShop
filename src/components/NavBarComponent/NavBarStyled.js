import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    padding: 10px;
  }

  .rightSide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .icons {
      gap: 5px;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .spanText {
      color: white;
      font-size: 18px;
    }

    .spanNumber {
      background-color: ${({ theme }) => theme.colors.mainYellow};
      width: 20px;
      height: 20px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }

  .middleSide {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 0; 
    border-radius: 20px;
    height: 50%;
    background-color: white;

    input {
      padding: 15px 25px;
      background-color: transparent;
      outline: none;
      color: ${({ theme }) => theme.colors.mainYellow};
      border: none;
      border-radius: 20px;

      ::placeholder {
        background-color: ${({ theme }) => theme.colors.mainYellow};
        color: ${({ theme }) => theme.colors.mainBlue};
      }
    }

    button {
      padding: 18px 28px;
      background-color: ${({ theme }) => theme.colors.mainYellow};
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 20px;
    }
  }

  .leftSide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export default Container;
