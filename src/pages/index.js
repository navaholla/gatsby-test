// Step 1: Import React
import * as React from 'react'
import './index.css'
import blackboard from '../images/blackboard.png'
import solar from '../images/solar.png'
import healthportal from '../images/healthportal.png'
import piazza from '../images/piazza.png'
import pharos from '../images/pharos.png'
import covidtest from '../images/covidtest.png'
import handshake from '../images/handshake.png'
import doublemaps from '../images/doublemaps.png'
import panera from '../images/panera.png'
import linkedIn from '../images/linkedIn.png'
import library from '../images/library.png'
import instacart from '../images/instacart.png'
import stonybrook from '../images/stonybrook.png'
import gso from '../images/gso.png'
import sbuEngaged from '../images/sbuEngaged.png'
import vis from '../images/vis.png'
import corq from '../images/corq.png'
import tbd from '../images/tbd.jpeg'



import ReactTooltip from "react-tooltip";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import MaterialTooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { Typography } from '@mui/material';





// Step 2: Define your component
const IndexPage = () => {

    const blackboardClick = () => {
        alert(1)
    }

    const black_board_tool_tip = "Blackboard tool tip"
    const solar_tool_tip = "Solar tool tip"
    const health_portal_tip = "Health portal tip"
    const piazza_tip = "Piazza tip"
    const pharos_tip = "Pharos tip"
    const covid_tip = "COVID tip"
    const handshake_tip = "Handshake tip"


  const Container = styled.div`
    background-color: lightblue;
    width: 300px;
    margin: 40px auto;
    padding: 10px;
    text-align: center;
`;

  return (
      <main>
        <title>Home Page</title>
       <div className="headingStony">
           <img src={stonybrook} height="92px" width="250px" align="left" />
           <h1 className="heading">Welcome to Stony Brook 🔥 </h1>
          <h2 className="heading"><b>Accessing Graduate resources in one page </b></h2>
       </div>

          {/*<div className="cards" onClick={blackboardClick}>*/}

       <div>
           <h1>Education</h1>
       </div>

      <div className="cards">
          <a href="https://blackboard.stonybrook.edu/webapps/login/">
              <MaterialTooltip title={<Typography fontSize={20} align="center">Blackboard!</Typography>}>
                  <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                      <img src={blackboard} height="200px" width="300px"  />
                  </div>
              </MaterialTooltip>
          </a>

        <a href="https://piazza.com/class/jcjw2j3uzf762z">
            <MaterialTooltip title={<Typography fontSize={20} align="center">Piazza!</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={piazza} height="90px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

        <a href="https://psns.cc.stonybrook.edu/psp/csprods/EMPLOYEE/CAMP/?cmd=login&languageCd=ENG&">
            <MaterialTooltip title={<Typography fontSize={20} align="center">Solar!</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={solar} height="50px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

          <a href="https://vis.stonybrook.edu/istart/controllers/start/StartEngine.cfm">
              <MaterialTooltip title={<Typography fontSize={20} align="center">VIS!</Typography>}>
                  <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                      <img src={vis} height="100px" width="200px"  />
                  </div>
              </MaterialTooltip>
          </a>


        <a href="https://library.stonybrook.edu/BOOKED/Web/schedule.php#">
            <MaterialTooltip title={<Typography fontSize={20} align="center">Library!</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={library} height="100px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

        <a href="https://print.stonybrook.edu/MyPrintCenter/">
            <MaterialTooltip title={<Typography fontSize={20} align="center">Pharos!</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={pharos} height="90px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>
      </div>


      <div>
          <h1>Health</h1>
      </div>

        <div className="cards">

            <a href="https://stonybrook.medicatconnect.com/home.aspx">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Health Portal!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={healthportal} height="150px" width="250px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://www.stonybrook.edu/commcms/studentaffairs/shs/services/COVID_Testing/COVID_Testing_Residents_Vaccinated-1.php">
                <MaterialTooltip title={<Typography fontSize={20} align="center">COVID Testing!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={covidtest} height="90px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">TBD!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

        </div>

      <div>
          <h1>Travel</h1>
      </div>

        <div className="cards">
            <a href="https://stonybrookuniversity.doublemap.com/map/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Double Maps!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={doublemaps} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">TBD!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">TBD!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>
        </div>

      <div>
          <h1>Social</h1>
      </div>

        <div className="cards">

            <a href="https://www.linkedin.com/feed/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">LinkedIn!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={linkedIn} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href="https://stonybrook.joinhandshake.com/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Handshake!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={handshake} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://www.stonybrookgso.org/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">GSO!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={gso} height="180px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href="https://stonybrook.campuslabs.com/engage/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">SBU Engaged!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={sbuEngaged} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href = "https://www.stonybrook.edu/commcms/studentaffairs/sac/Sb_Engaged_and_Corq/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Corq!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={corq} height="100px" width="100px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">TBD!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

        </div>

      <div>
          <h1>Food</h1>
      </div>


        <div className="cards">

            <a href="https://www.panerabread.com/en-us/home.html?openOverlay=order-setup-flow&utm_medium=yext&utm_source=local&utm_campaign=yext&utm_content=local-search&overlay=order-setup-flow">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Panera Bread!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={panera} height="150px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://instacart.com">
                <MaterialTooltip title={<Typography fontSize={20} align="center">Instacart!</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={instacart} height="100px" width="200px"  />
                </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">TBD!</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            {/*<MaterialTooltip title={<Typography fontSize={20}>This is the message which needs to be displayed !</Typography>}>*/}
            {/*    <Container>Material UI default</Container>*/}
            {/*</MaterialTooltip>*/}

        </div>



        <div className="cards">

        </div>

      <div className="headingEndStony">
          <img src={stonybrook} height="92px" width="250px" align="left" />
          <h1 className="heading">The End 🔥 </h1>
          <h2 className="heading"><b>Have a good day</b></h2>
      </div>


      <ReactTooltip id="blackboardToolTip" place="top" effect="solid" >
          {black_board_tool_tip}
      </ReactTooltip>

      <ReactTooltip id="solarToolTip" place="top" effect="solid" >
          {solar_tool_tip}
      </ReactTooltip>

      <ReactTooltip id="healthToolTip" place="top" effect="solid" >
          {/*{health_portal_tip}*/}
      </ReactTooltip>

      <ReactTooltip id="piazzaToolTip" place="top" effect="solid" >
          {/*{health_portal_tip}*/}
      </ReactTooltip>

      <ReactTooltip id="pharosToolTip" place="top" effect="solid" >
          {/*{health_portal_tip}*/}
      </ReactTooltip>

      <ReactTooltip id="covidToolTip" place="top" effect="solid" >
          {/*{health_portal_tip}*/}
      </ReactTooltip>

      </main>
  )
}
export default IndexPage