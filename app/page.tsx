"use client";
import { Box, Card, CardContent, CardMedia, Container } from "@mui/material";
import Ganesh from "./static/img/ganesh_edited.jpg";
import Pic from "./static/img/Diwali.jpg";
import Pic2 from "./static/img/david-sculpture-4.jpg";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
export default function Home() {
  return (
    <>
      <Carousel
        className="mb-4"
        autoPlay
        cycleNavigation
        animation="slide"
        interval={3000}
        duration={400}
        navButtonsAlwaysInvisible
      >
        <header className="h-[40vh] md:h-[60vh] lg:h-[80vh] w-screen aspect-video flex flex-row justify-center">
          <Image src={Ganesh} alt="ganesh" />
        </header>
        <header className="h-[40vh] md:h-[60vh] lg:h-[80vh] w-screen aspect-video flex flex-row justify-center">
          <Image src={Pic} alt="ganesh" />
        </header>
        <header className="h-[40vh] md:h-[60vh] lg:h-[80vh] w-screen aspect-video flex flex-row justify-center">
          <Image src={Pic2} alt="ganesh" />
        </header>
      </Carousel>
      <Container className="grid grid-cols-1 p-7 justify-center md:grid-cols-2 mx-auto gap-4 lg:gap-7 lg:grid-cols-3">
        <Card className="p-4 lg:p-7 dark:bg-slate-900">
          <CardMedia>
            <Image alt="ganesh" src={Ganesh} height={400} width={400} />
          </CardMedia>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit
            animi dolore neque nostrum labore ullam rerum voluptatem incidunt
            inventore, esse expedita quam autem! Voluptatum fugit optio minus,
            debitis dolore ratione natus quae labore nihil quis, quos recusandae
            laudantium iusto, dignissimos ex harum amet ducimus!
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
