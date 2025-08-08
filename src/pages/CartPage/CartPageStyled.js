import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  margin-left: 40px;

  .mainContainer {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;

    .removeButton {
      background-color: white;
      border-radius: 8px;
      color:transparent;
      border: none;
    }

    .tableContainer {
      width: 70%;
      height: auto;
      align-self: flex-start; 
      margin: 0;
      padding: 0;

      && {
        margin: 0;
        padding: 0;
      }

      .tableBody {
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          width: fit-content;
        }
      }

      .productShown {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #003f62;

        @media (max-width: 768px) {
          flex-direction: column !important;
          align-items: center !important;
          text-align: center;
          gap: 6px !important;

          img {
            margin-bottom: 6px;
          }

          h3 {
            font-size: 16px;
            font-weight: 600;
            max-width: 100%;
            word-break: break-word;
          }
        }
      }

      #lgScreens {
        @media (max-width: 768px) {
          display: none; 
        }
      }

      #smallScreen {
        @media (min-width: 768px) {
          display: none;
        }

        #quantity {
          @media (max-width: 768px) {
            padding-left: 30px;
          }
        }
      }
    }

    .right {
      width: 20%;
      align-self: flex-start; 
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        color: white;
        background-color: ${({ theme }) => theme.colors.mainBlue};
        padding: 9px 0;
        text-align: center;
        border-radius: 6px;
        margin-top: 0;
        margin-bottom: 0;
      }

      .totalPrice {
        text-align: center;
        font-size: 28px;
        font-weight: 800;
      }

      .applyCoupon {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input {
          padding: 10px 0;
          border: 1px solid #b6b6b6;
          border-radius: 8px;

          &::placeholder {
            color: ${({ theme }) => theme.colors.mainBlue};
            font-size: 16px;
          }
        }

        span {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.grayColor};
        }

        button {
          color: white;
          background-color: ${({ theme }) => theme.colors.mainBlue};
          padding: 15px 0;
          border-radius: 6px;
          font-size: 16px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.mainYellow};
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .mainContainer {
      flex-direction: column;
      width: 100%;
      
      overflow-x: hidden;
      margin-left: 0;
      margin-right: 0;
    }

    .tableContainer {
      width: 100% !important;
      max-width: 100vw;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0 10px;
      margin: 0 auto;
    }

    .tableHead .tableRow {
      display: none;
    }

    .tableBody{
      @media (max-width: 768px) {
        display: flex;
    flex-direction: column;
    justify-content: center;  
    margin-left: 90px;          
    
      }
    }

    .tableBody .MuiTableRow-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      box-sizing: border-box;
      max-width: 100%;
    }

    .tableBody .MuiTableCell-root {
      display: flex;
      justify-content: center;
      width: 100%;
      box-sizing: border-box;
      padding-left: 0 !important;
      padding-right: 0 !important;
      max-width: 100%;
      overflow-wrap: break-word;
    }

    .tableBody .MuiTableCell-root {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 8px;
    }

    .tableBody .MuiTableCell-root button:first-of-type {
      order: 1; 
    }
    .tableBody .MuiTableCell-root span {
      order: 2; 
    }
    .tableBody .MuiTableCell-root button:last-of-type {
      order: 3; 
    }

    img {
      width: 100px;
      height: 100px;
      border: 1px solid #003f62;
      border-radius: 8px;
      object-fit: cover;

      @media (max-width: 768px) {
        display: flex;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
      }
    }

    .removeButton {
      color: red;
      border: none;
      background-color: transparent;

      &:hover {
        cursor: pointer;
      }

      .quantityButtons {
        padding: 4px 8px;
        background-color: #cbd5e1;
        font-size: 19px;
      }
    }
  }

  .tableHead {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: white;
  }

  .tableCellTop {
    color: white;
  }

  .right {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-left: 110px;
    
      h2 {
        width: 20vh;
      }
    }
  }
`;

export default Container;
