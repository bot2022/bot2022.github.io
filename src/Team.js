
import { Grid, Link, Container } from '@mui/material';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MemberCard = ({ member }) => {
  return (
    <Card
      elevation={0}
    sx={{
      width: '100%',
    }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/idk.jpg"
        alt="Profile Picture"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {member.position}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

const team = [
  {
    name: "Amia Diakite",
    position: "President",
    subteam: "Software",
  }, {
    name: "Alexandar Callo",
    position: "Mechanical Lead",
    subteam: "Mechanical",
  }, {
    name: "Arnaud Buard",
    position: "Software",
    subteam: "Software",
  }, {
    name: "Bei Luo",
    position: "Mechanical",
    subteam: "Mechanical",
  }, {
    name: "Kaifeng Chen",
    position: "Mechanical",
    subteam: "Mechanical",
  }, {
    name: "Zhuowei Zhang",
    position: "Vice President",
    subteam: "Software",
  }, 


]

function Team() {

  return (
    <Container maxWidth="md">
      <h1>Our Team</h1>
      <p>
        In the 2022 season, the Orange Robotics team will be competing at RoboNation's 
        <span> <Link href="https://robosub.org/programs/2022/">RoboSub competition</Link>.
        </span>
      </p>
      <p>
        Team meeting time: Friday 1:30 PM - 3:30 PM
      </p>
      <p>
        Location: Link Hall 043B
      </p>

      <h2>Team Members</h2>
      <Grid container justifyContent={"flex-start"} >
        {
          team.map((member) => (
            <Grid item xs={12} sm={4} md={3} lg={3} key={member.name}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                p: 2,
                mb: 3,
                width: '280px',
              }}
            >
              <MemberCard member={member} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Team;

