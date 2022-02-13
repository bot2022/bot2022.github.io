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
          The robot is a fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.
        </Typography>
      </div>
    </Container>
  )
}

export default Robot;