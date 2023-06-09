import { useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion"

import styled from "styled-components";
import videoBG from "../public/bg-video.mp4";

function App() {
  const [isOpen, setOpen] = useState(false);
  const myDivRef = useRef<HTMLDivElement>(null);
  
  const handleClick = ()=>{
    if(myDivRef.current){
      myDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Wrapper>
      <Header>
        <div>
          <a href="/" className="logo">
            newsc
          </a>
        </div>

        <div className="menu">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
            easing="ease-in"
            hideOutline={false}
            size={28}
          />
        </div>
      </Header>
      {isOpen && (
        <Menu>
          <a href="" className="menuitem">
            ჩვენს შესახებ
          </a>
          <a href="" className="menuitem">
            კონტაქტი
          </a>
          <a href="" className="menuitem">
            დაჯავშნა
          </a>
        </Menu>
      )}

      <video src={videoBG} autoPlay loop muted />
      <div className="bg-overley"> </div>

      <motion.div className="o"
      initial={{opacity:0.5}}
      animate={{opacity: 1, transform: 'scale(1)'}}
      transition={{type: 'spring'}}

      >
        <button className="order"
        onClick={handleClick}
        >დაჯავშნე</button>
      </motion.div>

       
      <Content ref={myDivRef}>
      <motion.div className="content"
        initial={{opacity: 0}}
        whileInView={{opacity:1, transform: 'scale(1)'}}
        >
          <div className="ordersection">
            <h1> rent a studio</h1>
            <p>develop yourself</p>
           
          </div>

          <p className="text">
          We have a unique space for creative events and special occasions, we also have private studios for hire! Our incredible space in Prahran homes our music school The SoundLab and shares the same floor of our 700 sqm warehouse conversion, with a theatre company.
          </p>

          <button onClick={()=>window.open("tel:+995568116969")}>call</button>

        </motion.div>
      </Content>

   



         
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transition: 0.5s;
`;

const Header = styled.div`
  background-color: #ffffff10;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 0.5px solid #ffffff4c;
  font-family: "Cookie", cursive;
  font-size: 2.1em;
  z-index: 3;
`;



const Menu = styled.div`
  background-color: #b09e9e34;
  position: absolute;
  top: 50px;
  height: 92%;
  width: 50%;
  right: 0;
  transform: matrix();
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  background-color: #000000f3;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
