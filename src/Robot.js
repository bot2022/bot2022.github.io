import { Container, Typography } from "@mui/material";
import * as React from "react";
import robotImage from "./images/body2.png";

function Robot() {
  return (
    <Container maxWidth="md"
      sx={{
        marginBottom: "20px",
      }}
    >
      <h1>2022 Season Robot</h1>
      <img src={robotImage} alt="Robot" 
        width={"50%"}
      />

      <div>
        <Typography variant="h6" textAlign={"left"}>
          About the Robot
        </Typography>
        <Typography variant="body1" textAlign={"left"}>
        A fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.
        </Typography>
        <br></br>
        <Typography variant="h6" textAlign={"left"}>
          Software & Electronics Stack
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          The robot is powered by two 12v lipo battries and controlled by Raspberry Pi 4 as the computer and Arduino Uno as the microcontroller board.
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          We are controlling the thrusters through BlueRobotics ESC controllers, and detecting the surroundings through cameras, ultrasound radar, IMU, and depth sensors.
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          The software team leverages Robotics Operating System to control the robot.
        </Typography>

        <br></br>
        <Typography variant="h6" textAlign={"left"}>
          Mechanical Parts
        </Typography>
        <Typography variant="body1" textAlign={"left"}>
          The robot is designed using SolidWorks and built mainly by xxx board through lazer cuttting and 3D printing. The main body is made of xxx tube. There are 6 BlueRobotics T200 thrusters maneuvering the robot.
        </Typography>
        <Typography variant="body1" textAlign={"left"}>
          The sealing solution is still under development : 3
        </Typography>
      </div>
    </Container>
  )
}

export default Robot;