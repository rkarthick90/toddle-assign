import styled from "styled-components";
import theme from "../../components/Theme";

export const AppContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  max-width: 986px;
  width: 90%;
  margin: 100px auto;
  flex-direction: column;

  h3 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.palette.elephant};
    width: 100%;
  }

  .row-header {
    border: 1px solid ${theme.palette.rhino};
    padding: 5px 10px;
    border-left: none;
    border-right: none;

    span.helptext {
      font-size: 14px;
      font-weight: 400;
      color: ${theme.palette.elephant};
      line-height: 1;
    }
    .title {
      font-weight: bold;
      font-size: 14px;
    }
  }
  .addBtn {
    margin: 15px auto;
    width: 100%;
    border-radius: 4px;
    padding: 10px;
    background: #284255;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0px 3px 10px #868585;
      transition: box-shadow 250ms ease-in-out;
    }
  }

  .save {
    display: flex;
    align-items: center;
    width: 80px;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid ${theme.colors.base.gray};
    padding: 5px 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: ${theme.palette.elephant};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-bottom: 1px solid ${theme.palette.rhino};
  width: 100%;
  min-height: 40px;
  font-size: 14px;
`;

export const Content = styled.div`
  margin-left: 15%;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  color: ${(props) =>
    props.indent === 1
      ? theme.palette.dodger
      : props.indent === 2
      ? theme.palette.chateau
      : theme.palette.elephant};

  input {
    background: transparent;
    padding: 10px;
    width: 100%;
  }
`;

export const OrderBox = styled.div`
  box-sizing: border-box;
  background: #a2a2a2;
  height: inherit;
  min-height: 40px;
  width: 40px;
  border: 1px solid #a2a2a2;
  margin-left: ${(props) => props.indent * 20}px;
  border-radius: 1px;
`;
