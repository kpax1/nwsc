import { useRef, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import styled from "styled-components";
import videoBG from "../dist/video.mp4";

const imgArray = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

function App() {
  const [isOpen, setOpen] = useState(false);
  const myDivRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (myDivRef.current) {
      myDivRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Wrapper>
      <Header>
        <div>
          <a href="/" className="logo">
          𝔫𝔴𝔰𝔠
          </a>
        </div>

        <div className="menuicon">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
            easing="ease-in"
            hideOutline={true}
            size={28}
          />
        </div>
      </Header>
      {isOpen && (
        <Menu>
          <div className="menuitem" onClick={handleClick}>
            ჩვენს შესახებ
          </div>
          <div className="menuitem" onClick={handleClick}>
            კონტაქტი
          </div>
          <div className="menuitem">Book </div>
          <div className="menuitem wow">გალერია</div>

        
        </Menu>
      )}

      <video src={videoBG} autoPlay loop muted />
      <div className="bg-overley"> </div>

      <motion.div
        className="o"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ type: "spring" }}
      >
        <button className="order" onClick={handleClick}>
          Book now
        </button>
      </motion.div>

      

      <Content ref={myDivRef}>
        
      <motion.div
          className="content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
        >
          <div className="ordersection">
            <h1> rent a studio</h1>
            <p>develop yourself</p>
          </div>

          <motion.p className="text" variants={item}>
            
            Don't miss out, `take your djing to the next level keep in minde newSchool
          </motion.p>

          <motion.p
            className="calltext"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100, x: -100, transform: "scale(1)" }}
          >
            for rent call us:
          </motion.p>
          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            call
          </motion.button>

          <motion.button
            className="call"
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <a href="https://calendar.google.com/calendar/u/0/embed?src=nwscrecords@gmail.com&ctz=Asia/Tbilisi&fbclid=IwAR2jCSWxhaQq0W0aqAftsvmFCuKrt67f8XCU7pweM4zemCMn2MsgpfsK-Kw">
            Book Online

            </a>
          </motion.button>

          <motion.button
            className="call"
            onClick={() => window.open("tel:+995511332212")}
            initial={{ y: 100, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            about us
          </motion.button>
        </motion.div>

        
      </Content>


      <div 
      className="info">
      <motion.div
          className="content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
        >
          <div className="ordersection">
            <h1> about us</h1>
          </div>

          
            <div className="inform">
            Attention all DJs in Tbilisi! Are you tired of practicing your sets at home, or struggling to find a suitable place to record your tracks? Look no further than “Newschool”, the newest and most state of the art DJ studio in town!
            Our studio is fully equipped with the latest gear 
            including the top of the line
            CdJ 3000 & 2000 NXS2 x2

            as well as the industry standard 
            mixer Xone92 & Xone 96. 
            
            We also have a powerful sound system
            KRK Rokit8 & Yamaha HS8 speakers to ensure your mixes sound crystal clear.
Newschool is now available for rental, whether you’re a seasoned pro or just starting out in the world of DJing. Use our space to record your next mix, practice your sets before a big gig, or even host a listening party for your friends.
Don’t miss out, take your DJing to the next level. Contact us to book your session at Newschool.
            </div>

          
         

         
        </motion.div>
      </div>

      <motion.div
        className="o"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ type: "spring" }}
      >
        <button className="order" onClick={handleClick}>
          Book now
        </button>
      </motion.div>
      

      <div className="zina">
        <motion.p
          className="gallery"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          Gallery
        </motion.p>
        <motion.div
          className="ziniko"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            className="photos"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {imgArray.map((pic) => (
              <motion.div key={pic} className="item" variants={item}>
                <img src={pic} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.p
          className="p"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          ALL RIGHT RESERVED 
          <p className='bottomtext'>
          © 2023 for
          <span className="logonottom"> NWSChool</span>
          </p>
        </motion.p>
      </div>
      
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
  font-size:2em;
  z-index: 3;
`;

const Menu = styled.div`
  background-color: #cecece16;
  position: absolute;
  top: 50px;
  height: 92%;
  width: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
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

