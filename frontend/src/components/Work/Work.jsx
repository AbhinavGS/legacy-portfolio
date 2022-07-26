import React from "react";
import { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { urlFor, client } from "../../client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Work.scss";

const Work = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Container>
        <div className="works-container-div">
          <h2 className="works-title-main">Check out my portfolio</h2>
          <Grid className="works-container" container spacing={2}>
            {data.map((item) => (
              <Grid item key={item.title}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`${urlFor(item.imgUrl)}`}
                    alt="project homepage"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="works-button-div">
                    <Button size="small">
                      <AiFillEye size={35} className="works-icons" />
                    </Button>
                    <Button size="small">
                      <AiFillGithub size={35} className="works-icons" />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Work;
