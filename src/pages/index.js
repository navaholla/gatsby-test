// Step 1: Import React
import * as React from 'react'
import { useState } from 'react'
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
import housing from '../images/housing.png'


import ReactTooltip from "react-tooltip";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import MaterialTooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import { Typography } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';





// Step 2: Define your component
const IndexPage = () => {

    const [count, setCount] = useState(0);


    const blackboardClick = () => {
        alert(1)
    }

    const black_board_tool_tip = "Blackboard is Stony Brook University's learning management system. Access course documents and grades."
    const solar_tool_tip = "Solar is Stony University's enterprise wide self service system which provides faculty, staff, and students with online access to manage personal information. Register for class, print schedules, pay bills, view transcripts and submit student employment time sheet"
    const health_portal_tip = "Stony Brook University Wolfie Health Portal for Student Health Services, Counseling and Psychological Services. Accessing immunization data, insurance information for SHS. Tele-counseling consultation appointments."
    const piazza_tip = "Piazza is an intuitive platform for instructors to efficiently manage the class Q&A."
    const pharos_tip = "Pharos application to access Stony Brook University printers."
    const covid_tip = "COVID testing booking portal based on the status (Resident, Employee, Staff)."
    const handshake_tip = "Handshake is the only job posting site at Stony Brook University and serves as the Career Center's recruiting and career services platform for students, alumni and employers."
    const vis_tip = "Stony Brook University's Visa and Immigration Services. Electronic submission of immigration requests and provides a source of communication for updates and notifications."
    const library_tip = "Stony Brook library room booking for group of 2-6 students. Central Reading Room, North Reading Room, Southampton campus."
    const tbd_tip = "To be decided soon :)"
    const double_maps_tip = "Stony Brook campus bus transit, get real time data to where the bus is and at what time it reaches each stop."
    const linkedin_tip = "Business and employment oriented online service."
    const gso_tip = "The GSO is the graduate student government at Stony Brook University. The GSO is incorporated in the State of New York as a nonprofit organization, and is legally and structurally independent of the university administration."
    const engaged_tip = "Discover unique opportunities at Stony Brook University."
    const corq_tip = "Event pass for all SBU engagements."
    const panera_tip = "American chain store of bakery-cafe, Never a no for COFFEE :)"
    const instacart_tip = "Grocery delivery"
    const housing_portal_tip = "Stony Brook Housing Portal, for selecting apartment rooms and other important notifications."

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
          {console.log("count ",count)}
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
              <MaterialTooltip title={<Typography fontSize={20} align="center">{black_board_tool_tip}</Typography>}>
                  <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                      <img src={blackboard} height="200px" width="300px"  />
                  </div>
              </MaterialTooltip>
          </a>

        <a href="https://piazza.com/class/jcjw2j3uzf762z">
            <MaterialTooltip title={<Typography fontSize={20} align="center">{piazza_tip}</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={piazza} height="90px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

        <a href="https://psns.cc.stonybrook.edu/psp/csprods/EMPLOYEE/CAMP/?cmd=login&languageCd=ENG&">
            <MaterialTooltip title={<Typography fontSize={20} align="center">{solar_tool_tip}</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={solar} height="50px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

          <a href="https://vis.stonybrook.edu/istart/controllers/start/StartEngine.cfm">
              <MaterialTooltip title={<Typography fontSize={20} align="center">{vis_tip}</Typography>}>
                  <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                      <img src={vis} height="100px" width="200px"  />
                  </div>
              </MaterialTooltip>
          </a>


        <a href="https://library.stonybrook.edu/BOOKED/Web/schedule.php#">
            <MaterialTooltip title={<Typography fontSize={20} align="center">{library_tip}</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={library} height="100px" width="200px"  />
                </div>
            </MaterialTooltip>
        </a>

        <a href="https://print.stonybrook.edu/MyPrintCenter/">
            <MaterialTooltip title={<Typography fontSize={20} align="center">{pharos_tip}</Typography>}>
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
                <MaterialTooltip title={<Typography fontSize={20} align="center">{health_portal_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={healthportal} height="150px" width="250px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://www.stonybrook.edu/commcms/studentaffairs/shs/services/COVID_Testing/COVID_Testing_Residents_Vaccinated-1.php">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{covid_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={covidtest} height="90px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{tbd_tip}</Typography>}>
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
                <MaterialTooltip title={<Typography fontSize={20} align="center">{double_maps_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={doublemaps} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{housing_portal_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={housing} height="100px" width="300px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{tbd_tip}</Typography>}>
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
                <MaterialTooltip title={<Typography fontSize={20} align="center">{linkedin_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={linkedIn} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href="https://stonybrook.joinhandshake.com/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{handshake_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={handshake} height="150px" width="150px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://www.stonybrookgso.org/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{gso_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={gso} height="180px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href="https://stonybrook.campuslabs.com/engage/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{engaged_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={sbuEngaged} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            <a href = "https://www.stonybrook.edu/commcms/studentaffairs/sac/Sb_Engaged_and_Corq/">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{corq_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={corq} height="100px" width="100px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{tbd_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px" />
                    </div>
                </MaterialTooltip>
            </a>

        </div>

      <div>
          <h1>Food</h1>
      </div>


        <div className="cards">

            <a href="https://www.panerabread.com/en-us/home.html?openOverlay=order-setup-flow&utm_medium=yext&utm_source=local&utm_campaign=yext&utm_content=local-search&overlay=order-setup-flow">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{panera_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={panera} height="150px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>

            <a href="https://instacart.com">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{instacart_tip}</Typography>}>
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={instacart} height="100px" width="200px"  />
                </div>
                </MaterialTooltip>
            </a>

            <a href="">
                <MaterialTooltip title={<Typography fontSize={20} align="center">{tbd_tip}</Typography>}>
                    <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                        <img src={tbd} height="100px" width="200px"  />
                    </div>
                </MaterialTooltip>
            </a>


            {/*<MaterialTooltip title={<Typography fontSize={20}>This is the message which needs to be displayed !</Typography>}>*/}
            {/*    <Container>Material UI default</Container>*/}
            {/*</MaterialTooltip>*/}


            {/*<Popup trigger={<button className="button"> Open Modal </button>} modal>*/}
            {/*    <span> Modal content </span>*/}
            {/*</Popup>*/}


        </div>



        <div className="cards">

        </div>

      <div className="headingEndStony">
          <img src={stonybrook} height="92px" width="250px" align="left" />
          <h1 className="heading">The End 🔥 </h1>
          <h2 className="heading"><b>© Developed by Navaneeth Holla</b></h2>
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