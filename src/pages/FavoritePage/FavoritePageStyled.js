import styled from "styled-components";

const FavoriteContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 80%;

  .tableHead {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: white;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .tableCellTop {
    color: white;
    font-weight: 600;
  }

  .productCell,
  .priceCell,
  .removeCell {
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      text-align: center;
    }
  }

  .productRow {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      border: 1px solid #003f62;
      object-fit: cover;
    }

    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #003f62;
      word-break: break-word;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
  }

  .priceCell h3 {
    margin: 10px 0 0;
    font-size: 16px;
    font-weight: 600;
    color: #003f62;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }

  .removeButton {
    color: red;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      margin: 10px auto 0;
    }
  }

  .MuiTableRow-root {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
    }
  }

  .MuiTableCell-root {
    border-bottom: none;

    @media (max-width: 768px) {
      padding: 6px 0;
    }
  }
`;

export default FavoriteContainer;
