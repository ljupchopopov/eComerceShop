import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 16px;
  height: 80px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;

  .right {
    display: flex;
    gap: 15px;

    .item {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;

      &:hover {
        color: #0070f3;
      }
    }
  }
     a {
    text-decoration: none;
    color: #0070f3;

    
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Container;
