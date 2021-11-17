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


import ReactTooltip from "react-tooltip";

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
            <div className="card tooltip" data-tip={black_board_tool_tip} data-for="blackboardToolTip" style={{height: "208px", width: "300px"}}>
              {/*Blackboard*/}
                <img src={blackboard} height="200px" width="300px"  />
                    {/*<span className="tooltiptext">Tooltip blackboard</span>*/}
            </div>
          </a>

        <a href="https://piazza.com/class/jcjw2j3uzf762z">
            <div className="card tooltip" data-tip={piazza_tip} data-for="piazzaToolTip" style={{height: "208px" , width: "300px"}}>
                <img src={piazza} height="90px" width="200px"  />
                {/*<span className="tooltiptext">Tooltip piazza</span>*/}
            </div>
        </a>

            <a href="https://psns.cc.stonybrook.edu/psp/csprods/EMPLOYEE/CAMP/?cmd=login&languageCd=ENG&">
                <div className="card tooltip" data-tip data-for="solarToolTip"  style={{height: "208px" , width: "300px"}}>
                    <img src={solar} height="50px" width="200px"  />
                        {/*<span className="tooltiptext">Tooltip solar</span>*/}
                </div>
            </a>

          <a href="https://vis.stonybrook.edu/istart/controllers/start/StartEngine.cfm">
              <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                  <img src={vis} height="100px" width="200px"  />
                  <span className="tooltiptext">Tooltip VIS</span>
              </div>
          </a>


        <a href="https://library.stonybrook.edu/BOOKED/Web/schedule.php#">
            <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                <img src={library} height="100px" width="200px"  />
                {/*<span className="tooltiptext">Tooltip Library Booking</span>*/}
            </div>
        </a>

        <a href="https://print.stonybrook.edu/MyPrintCenter/">
            <div className="card tooltip" data-tip={pharos_tip} data-for="pharosToolTip" style={{height: "208px" , width: "300px"}}>
                <img src={pharos} height="90px" width="200px"  />
                {/*<span className="tooltiptext">Tooltip Pharos</span>*/}
            </div>
        </a>
      </div>


      <div>
          <h1>Health</h1>
      </div>

        <div className="cards">

            <a href="https://stonybrook.medicatconnect.com/home.aspx">
                <div className="card tooltip" data-tip={health_portal_tip} data-for="healthToolTip" style={{height: "208px" , width: "300px"}}>
                    {/*Blackboard*/}
                    <img src={healthportal} height="150px" width="250px"  />
                    {/*<span className="tooltiptext">Tooltip health portal</span>*/}
                </div>
            </a>


            <a href="https://www.stonybrook.edu/commcms/studentaffairs/shs/services/COVID_Testing/COVID_Testing_Residents_Vaccinated-1.php">
                <div className="card tooltip" data-tip={covid_tip} data-for="covidToolTip" style={{height: "208px" , width: "300px"}}>
                    <img src={covidtest} height="90px" width="200px"  />
                    {/*<span className="tooltiptext">Tooltip Covid testing</span>*/}
                </div>
            </a>
        </div>


      <div>
          <h1>Travel</h1>
      </div>

        <div className="cards">
            <a href="https://stonybrookuniversity.doublemap.com/map/">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={doublemaps} height="150px" width="150px"  />
                    <span className="tooltiptext">Tooltip Doublemap</span>
                </div>
            </a>
        </div>


      <div>
          <h1>Social</h1>
      </div>

        <div className="cards">

            <a href="https://www.linkedin.com/feed/">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={linkedIn} height="150px" width="150px"  />
                    {/*<span className="tooltiptext">Tooltip LinkedIn</span>*/}
                </div>
            </a>


            <a href="https://stonybrook.joinhandshake.com/">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={handshake} height="150px" width="150px"  />
                    <span className="tooltiptext">Tooltip Handshake</span>
                </div>
            </a>

            <a href="https://www.stonybrookgso.org/">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={gso} height="180px" width="200px"  />
                    <span className="tooltiptext">Tooltip GSO</span>
                </div>
            </a>


            <a href="https://stonybrook.campuslabs.com/engage/">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={sbuEngaged} height="100px" width="200px"  />
                    <span className="tooltiptext">Tooltip SBU Engaged</span>
                </div>
            </a>

        </div>

      <div>
          <h1>Food</h1>
      </div>


        <div className="cards">


            <a href="https://www.panerabread.com/en-us/home.html?openOverlay=order-setup-flow&utm_medium=yext&utm_source=local&utm_campaign=yext&utm_content=local-search&overlay=order-setup-flow">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={panera} height="150px" width="200px"  />
                    <span className="tooltiptext">Tooltip Panera</span>
                </div>
            </a>

            <a href="https://instacart.com">
                <div className="card tooltip" style={{height: "208px" , width: "300px"}}>
                    <img src={instacart} height="100px" width="200px"  />
                    <span className="tooltiptext">Tooltip Instacart</span>
                </div>
            </a>


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