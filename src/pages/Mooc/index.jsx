import React from "react";

import {
  moocCornerItems1,
  moocCornerItems2,
  moocVideosLinks,
} from "@/constants";
import SectionWrapper from "@/layout/SectionWrapper";
import ArticleSideMenu from "@/components/ArticleSideMenu";
import CircularArrangement from "@/components/CircularArrangement";

const MoocVideos = () => {
  const moocLinks = Object.values(moocVideosLinks);

  return (
    <SectionWrapper headingText="Introduction to MOOC Video Contents">
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-14 md:gap-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <ArticleSideMenu title="mooc videos" data={moocLinks} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2 text-justify">
          <p>
            MOOC (Massive Open Online Course) an online interactive course for
            students to learn new skills outside a typical classroom setting by
            having more interaction and cooperation with other students in an
            open digital environment. The word MOOC refers to Massive Open
            Online Courses and it has now a popular tool used for online
            learning. MOOCs provide education to a multiple of people across the
            planet - usually without cost. Given that all MOOCs suffer from a
            rapid drop-off in numbers throughout the course, educators need to
            consider how to maintain the interest of the participants or
            students. Educators needs to be involved in a MOOC, in this way they
            understand what works and which platforms are appealing.
            <br />
            <br />
            MOOC video is a video tutorial that designed and created for massive
            open online course environment. What separates a MOOC video from a
            regular normal video seen on the web is how they are structured to
            interact with students. The classic example is to have the videos
            instruct on a clearly defined topic, and going through a process or
            explaining/condensing a particular lesson that is accompanied by a
            quiz to test the students' knowledge. But MOOC videos can do much
            more than this method to interact with students.
            <br />
            <br />
            MANEUVER project has created five MOOC video contents that provides
            a process of setting up local VR server, navigating inside 3D
            environemnt, interacting wit 3D objects, simulating CNC machines and
            different 3D printer models.
          </p>

          <div className="mt-14 space-y-32">
            <CircularArrangement
              key="cir_1"
              defaultVideo="/videos/video4_CNC.mp4"
              cornerItems={moocCornerItems1}
            />
            <CircularArrangement
              key="cir_2"
              defaultVideo="/videos/dellVisor_Setup.mp4"
              cornerItems={moocCornerItems2}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MoocVideos;
