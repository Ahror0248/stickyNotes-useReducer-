import styled from "styled-components";
import brick from "./brickWall.jpg";
import note from "./notes.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100wh;
  height: 100vh;
  padding: 80px 100px;
  background: url(${brick});
  background-size: contain;
`;

export const Header = styled.h1`
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 30px;
`;

export const Textarea = styled.textarea`
  border: 1px solid lightgray;
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  outline: none;
  padding: 10px;
`;

export const FormButton = styled.button`
  width: 100%;
  background-color: #fff27f;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
  :hover {
    background-color: tomato;
    color: white;
  }
`;

export const Stickdiv = styled.div`
  position: absolute;
  cursor: pointer;
  background: url(${note});
  background-size: cover;
  top: 100px;
  left: 300px;
  height: 200px;
  width: 200px;
  padding: 40px 20px;
`;

export const StickyText = styled.pre`
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #fffa96; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d1b204; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    //  border: 3px solid orange;  /* creates padding around scroll thumb */
  }
`;

export const CloseIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 15px;
  top: 25px;
  transition: transform 0.3s linear;
  :hover {
    transform: scale(1.6);
  }
`;
