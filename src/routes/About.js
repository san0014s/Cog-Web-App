import React from 'react';
import '../css/About.css';



const About = () => {
  return (
    <body>

<head>
    <title>About us Page</title>
</head>

      <div class="wrapper">
        <h1> Meet Our Team </h1>
        <div class="general"></div>
        {/* <h1> Test Test Test Test </h1> */}
          <div class="group">
            <div class="group_member">
                <div class="team_img">
                    <img src="https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/NSA.JPG" alt="nsa_image"></img>
                </div>
                  <h3>Nate Arndt</h3>
                  <p class="role">Front End</p>
                  <p>I am a Cybersecurity Major from Martinsburg, WV. My career interests include security analysis
                    and vulnerability testing. I enjoy creating solutions with motivated team members on complex projects.
                    Outside of academics, I like to get outdoors as much as possible and work on my small business. 
                  </p>
            </div>

            <div class="group_member">
              <div class="team_img">
                    <img src="https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/SAN.jpg" alt="steven_image"></img>
              </div>
                  <h3>Steven Navarro</h3>
                  <p class="role">Front End</p>
                  <p>I am Steven Navarro from Martinsburg, West Virginia. Currently enrolled
                   in West Virginia University pursuing a Cybersecurity degree with minors
                    in Criminology and Computer Science. Passion involved web development and
                     cybersecurity/IT. I enjoy challenges in life that give me purpose and
                      makes me want to do more. Being active and constantly learning is 
                      something I always make myself do</p>
            </div>

            <div class="group_member">
              <div class="team_img">
                  <img src="https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/KJK.png" alt="krysztof_image"></img>
              </div>
                  <h3>Krysztof Kudlak</h3>
                  <p class="role">Front End</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni!</p>
            </div>

            <div class="group_member">
              <div class="team_img">
                  <img src="https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/KES.png" alt="karl_image"></img>
              </div>
                  <h3>Karl Scheib</h3>
                  <p class="role">Front End</p>
                  <p>I am currently Computer Engineering undergraduate at West Virginia University with a minor in Mathematics.
                Aside from my degree, I also enjoy game development and design. I have a deep appreciation for projects and fields
                that involve many people with a variety of talents and experiences.</p>
            </div>

            <div class="group_member">
              <div class="team_img">
                  <img src="https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/jt.jpg" alt="jt_image"></img>
              </div>
                  <h3>Jake Taylor</h3>
                  <p class="role">Front End</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni!</p>
            </div>


          </div>

      </div>

    </body>
  )
}

export default About