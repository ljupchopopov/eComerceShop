import styled from "styled-components";

export const Container = styled.div`



.leftSide {
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;  

    @media (min-width: 769px) {
      flex-direction: column;  
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .responsive-image {
      pointer-events: none; 
      max-width: 600px;
      justify-content: center;
      display: flex;

      @media (max-width: 768px) {
        width: 100%;
        max-width: 320px;
        height: auto;
        object-fit: contain;
        display: block;
        margin: 0 auto;
        z-index: 0;
        position: relative;
        margin-left: -10px;
      }

      @media (min-width: 769px) {
        margin-bottom: 20px; 
      }
    }
}

.mainContainer {
    margin-left: 40px;

    display: flex;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
}

.images {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

    @media (max-width: 768px) {
      gap: 10px;         
      justify-content: center;
      margin: 0 10px;    
      overflow-x: auto;   
      padding-bottom: 10px;
      box-sizing: border-box;
      margin-left: -65px;
    }

    @media (min-width: 769px) {
      margin-left: 0; 
    }
}

.rightSide {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        color: ${({ theme }) => theme.colors.mainBlue};
        font-size: 36px;
    }

    h5 {
        font-size: 20px;
        font-weight: 700;
    }

    .availability {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .availability .availabilityIcon {
        display: flex;
        align-items: center;
        color: #30BD57;
        gap: 5px;

    }

    p {
        color: ${({ theme }) => theme.colors.grayColor};
    }

    
}


.tags {
    display: flex;
    flex-direction: row;
    align-items: center;
    

    ul {
        display: flex;
        align-items: center;
        gap: 5px;
    }
      
    li {
        display: flex;
        flex-direction: row;
        gap: 5px;
        list-style-type: none;
        background-color: #F4F4F4;
        padding: 8px 16px;         
        border-radius: 12px;       
        color: #6B7280;              
        cursor: pointer;
    }
    
}

.quantity {
          display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .addQuantity {
            background-color: ${({ theme }) => theme.colors.lightGray};;
            color: #6B7280;                   
            padding: 4px 10px;
            border: 1px solid #6B7280;        
              
        }
    }

    .addCart {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        button {
            color: white;
            border-radius: 12px;
            background-color: ${({ theme }) => theme.colors.mainYellow};
            padding: 12px 26px;
            border: none;


        }
    }

    .shipping {
        display: flex;
        align-items: center;
        gap: 10px;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

`




