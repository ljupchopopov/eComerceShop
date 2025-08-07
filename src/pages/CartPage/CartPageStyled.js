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

    .productShown {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #003F62;

    }
    
}

@media (max-width: 768px) {
    flex-direction: column;
    display: flex;
}
   
    
  

  .tableContainer {
    width: 70%;
  
    @media(max-width: 768px) {
        width: 100%;
    }
}

    .tableHead {
        background-color:${({ theme }) => theme.colors.mainBlue};
        color: white;
    }

.tableCellTop {
    color: white;
}

img {
    width: 100px;
    height: 100px;
    border: 1px solid #003F62;
    border-radius: 8px;
    object-fit: cover;
}

.removeButton{

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




`

export default Container