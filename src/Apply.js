import { Button, Container } from "@mui/material";
import * as React from "react";


function Apply() {
  return (
    <Container maxWidth="md"
      sx={{
        marginBottom: "20px",
      }}
    >
      <h1>Apply</h1>

      <p>
        Orange Robotics always welcomes new members on a rolling basis, we are glad to hear of your interest and would love to have you!
      </p>

      <Button>Interest Form</Button>

    </Container>
  )
}

export default Apply;