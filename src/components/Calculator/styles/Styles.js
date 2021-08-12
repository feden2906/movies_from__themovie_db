import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: darkgray;
  width: 300px;
  height: 500px;
  min-height: auto;
  margin: auto;
  //min-height: 100vh;
  display: grid;
  border-radius: 25px;
  border: black solid 1px;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
 
  .display {

    width: 80%;
   
    h1 {
      color: silver;
      text-align: center;
    }
  }

  .number-pad {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 0 30px;
    width: 200px;
    margin: 0 auto;

    button {
      width: 85%;
      height: 40px;
      border-radius: 15px;
      border: 2px solid silver;
      font-size: 1rem;
      color: black;
      background: cornflowerblue;

      &:focus {
        outline: none;
      }

      &:hover {
        border: 3px solid darkgrey;
        background: darkslateblue;
      }
    }

    button.function-button {
      background-color: #2a88e3;

      &:hover {
        border: 2px solid darkgrey;
        background: darkslateblue;
      }
    }

    button.white-button {
      color: #2d3436;
      background: #6691c5;

      &:hover {
        border: 2px solid darkgrey;
        background: darkslateblue;
      }
    }
  }

  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid darkslateblue;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: deepskyblue;
  
  h2,
  p {
    text-align: center;
    color: black;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid darkslateblue;
    padding: 15px 20px;
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
