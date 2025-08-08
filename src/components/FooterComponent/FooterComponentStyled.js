import styled from "styled-components";

const Container = styled.div`

 background-color: ${({ theme }) => theme.colors.lightBlue};
  height: 300px;
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

  .left {
    justify-content: center;
    align-items: center;
    color: #292D32;
    gap: 20px;
    display: flex;
    flex-direction: column;

    .photos {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    a {
        color:black
    }
  }

  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #292D32;
  }

  .right {
 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    color: #292D32;   
  }

`

export default Container