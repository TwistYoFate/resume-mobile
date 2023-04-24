import React from 'react'
import '../Styles/Data.scss'
import springer from "../../../assets/images/springer.jpg"
import os_py from "../../../assets/images/os-py.png"
import crash_py from "../../../assets/images/crash-py.png"
import codechef from "../../../assets/images/codechef-certi-1.png"

function Data() {
    return (
        <div id="data">
            <div className="item" id='Work Experience'>
            <h4>Work Experience</h4>
                <h5>Spak Engineering (Oct-2021 - Current)</h5>
                <ol>
              <li>
                <h5>ItsUs :</h5>
                <p>
                  It is a showcase platform for Photographer’s and Director’s
                  portfolios.<br/><br/>
                  <ul>
                    <li>Custom Video Player, Reels, Atomic Design Pattern</li>
                    <li>Multi-Platform, React, Typescript, Docker</li>
                  </ul>
                </p>
              </li>
              <li>
                <h5>Maintenance Manager :</h5>
                <p>
                  An application to maintain and monitor industrial machines and
                  notify the salesforce team.<br/><br/>
                  <ul> 
                      <li>Frontend Ownership, Feature
                  separated Architecture, react-formik, redux-state-sync</li></ul>
                </p>
              </li>
              <li>
                <h5>Pitstop :</h5>
                <p>
                  Task creation and management, web and mobile based
                  application.<br/><br/>
                  <ul>
                      <li>Created frontend from scratch using React,
                  CoreUI</li>
                  </ul>
                </p>
              </li>
            </ol>
                <h5> NEC Corporation (Jan-2020 - Sep-2021)</h5>
                <p>In NEC I have worked on React with Redux workflow, created components, and
sagas using Redux-Saga for side effects.
            </p>
            </div>


            <div className="item" id='Skills'>
                <h4>Skills</h4>
                {/* <h5> NEC Corporation (Jan-2020 - Current)</h5> */}
                <p>&bull; <strong>Languages&nbsp; :&nbsp;&nbsp;</strong>Javascript, Typescript, Java, Python</p>
                <p>&bull;<strong> Front&nbsp;End&nbsp; :&nbsp;&nbsp;</strong>HTML5,&nbsp;CSS3/SCSS,&nbsp;Material-UI,&nbsp;React&nbsp;with&nbsp;Redux&nbsp;&amp; Redux-SAGA&nbsp; Webpack-5</p>
                <p>&bull; <strong>Back End&nbsp; :&nbsp;&nbsp;</strong>Express/Node.js , Nodemailer, Mongoose, Tinymce-react</p>
                <p>&bull; <strong>Database&nbsp; :&nbsp;&nbsp;</strong>MongoDB, MongoDB Atlas</p>
                <p>&bull; <strong>Designing&nbsp; :&nbsp;&nbsp;</strong>Adobe&nbsp;Photoshop,&nbsp;Adobe&nbsp;Illustrator,&nbsp;Adobe XD,&nbsp;Figma</p>
                <p>&bull; <strong>DevOps&nbsp; :&nbsp; </strong>AWS,&nbsp;Docker</p>
                <p>&bull; <strong>Version Control&nbsp; :&nbsp; </strong>Git,&nbsp;Github</p>
            </div>


            <div className="item" id='Projects'>
                <h4>Projects</h4>
                <h5>• Slambook - MERN Stack based Blogging Webapp</h5>
                <p>It is a portfolio-cum-blogging-app which I solely created to learn&nbsp;fullstack development and actually understand how things work. Things that I learned and used in this project are :
                    <br /><br />
                    &bull; <strong>Frontend :</strong> React, Redux and Redux-Saga
                    <br />
                    &bull;&nbsp;<strong>Backend&nbsp;:</strong> Express/Node.js,&nbsp;Bcrypt(Hashing), Mongoose(ODM), Nodemailer(Mailing)
                    <br />
                    &bull; <strong>Database :&nbsp;</strong>MongoDB Atlas Cloud
                    <br />
                    &bull;<strong> Authorization :</strong> Json Web Tokens (JWT)
                    <br />
                    &bull; <strong>VersionControl : </strong>Git
                    <br />
                    &bull; <strong>Deployment :</strong> AWS EC2, AWS Route 53, AWS SES
                </p>
            </div>

            <div className="item" id='Position of Responsibility'>
                <h4>Positions of Responsibility</h4>
                {/* <h5>• Slambook - MERN Stack based Blogging Webapp</h5> */}
                <p>•Manager Graphics Design in GENERO2K19 (College Fest)<br/><br/>
                •Organised <span style={{color:"red"}}>TEDxABESEC-2019</span> as Production Head and Designer
                </p>
            </div>

            <div className="item" id='Education'>
                <h4>Education</h4>
                {/* <h5>• Slambook - MERN Stack based Blogging Webapp</h5> */}
                <p>B.Tech in Computer Science and Engineering from ABES Engineering College(AKTU)<br/><strong style={{fontSize:"70px"}}>80.6%</strong><br/><br/><br/>
                High School Certification from The Avadh School(CBSE)<br/><strong style={{fontSize:"70px"}}>80%</strong><br/><br/><br/>
                Senior Secondary Certification from DALIMSS(CBSE)<br/><strong style={{fontSize:"70px"}}>95%</strong><br/><br/><br/>
                </p>
            </div>

            <div className="item" id='Certificates/Papers'>
                <h4>Certificates/Papers</h4>
                <img src={codechef} height="50%" width="100%"/><br /><br /><br />
                <img src={crash_py} height="50%" width="100%"/><br /><br /><br />
                <img src={os_py} height="50%" width="100%"/><br /><br /><br />
                <img src={springer} height="50%" width="100%"/><br /><br /><br />
            </div>
            
        </div>
    )
}

export default Data
