import { Container, Typography } from "@mui/material";
import React from "react";

export default function Biography() {
  return (
    <>
      <Container className="flex flex-col gap-4 lg:gap-7">
        <Typography variant="h3" className="text-center">
          Prasad Avhad
        </Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          consequatur atque rem eveniet quidem placeat vero unde ipsum
          voluptatibus asperiores, odit beatae accusamus laboriosam ipsam
          aspernatur repellat. Officiis nisi reiciendis consequatur repudiandae
          eveniet aut itaque molestias, asperiores illo accusantium! Quod,
          consequuntur, quia odit libero neque amet possimus, sit recusandae
          delectus blanditiis assumenda dolore dolor at ipsum! Porro maiores
          omnis distinctio, animi cumque dolor totam consequuntur ad unde in
          aliquam repudiandae?
        </Typography>
      </Container>
    </>
  );
}
