import {
  adam,
  andrew,
  asee,
  carousel1,
  carousel2,
  carousel3,
  chris,
  cossette,
  daniel,
  desktopVR,
  desktopVRFlow,
  dhananjay,
  edgd,
  fidan,
  gejin,
  harris,
  howToInstallUnity,
  iconi,
  ieee,
  interactingWith3dObjs,
  interactionInVr,
  jtec,
  magesh,
  maneuverVRFramework,
  mcleese,
  merrell,
  navigationIn3dWorld,
  settingUpDellVisor,
  simulationOf3dPrinters,
  simulationOfBinderJetting,
  simulationOfCncMachine,
  simulationOfFdmTechnology,
  smartManufacturing,
  softwareTools,
  spextraAR,
  spextradVR,
  spextraMR,
  spextraVR,
  steamAndSteamVr,
  visualStudioInstallation,
  vrContentTypes,
  vrPerson,
  vrSimulation3dPrinters1,
  vrSimulation3dPrinters2,
  vrSimulation3dPrinters3,
  vrSimulationCnc,
  vrUnityScene,
  windowsOsRequirements,
  zahraee,
} from "@/assets";

export const navLinks = [
  {
    id: "Home",
    title: "Home",
    type: "page",
    url: "/",
  },
  {
    id: "vr/manufacturing",
    title: "VR / Manufacturing",
    type: "page",
    url: "/virtual-reality",
  },
  // {
  //   id: "Modules",
  //   title: "Modules",
  //   type: "dropdown",
  //   submenu: [
  //     {
  //       url: "/virtual-reality",
  //       type: "page",
  //       title: "Virtual Reality",
  //     },
  //     {
  //       url: "/manufacturing",
  //       type: "page",
  //       title: "Manufacturing",
  //     },
  //     {
  //       url: "/mooc-videos",
  //       type: "page",
  //       title: "MOOC Videos",
  //     },
  //   ],
  // },
  {
    id: "mooc-videos",
    url: "/mooc-videos",
    type: "page",
    title: "MOOC Videos",
  },
  {
    id: "Team",
    title: "Team",
    type: "page",
    url: "/team",
  },
  {
    id: "Activities",
    title: "Activities",
    type: "page",
    url: "/activities",
  },
  {
    id: "outcomes",
    title: "Outcomes",
    type: "page",
    url: "/outcomes",
  },
  {
    id: "Disseminations",
    title: "Disseminations",
    type: "page",
    url: "/dissemination",
  },
  {
    id: "contact",
    title: "Contact",
    type: "page",
    url: "/contact",
  },
];

export const carouselHome = [
  { image: carousel1, description: "Image 1" },
  { image: carousel2, description: "Image 2" },
  { image: carousel3, description: "Image 3" },
];

export const team = [
  {
    name: "Magesh Chandramouli",
    role: "Principal Investigator",
    description:
      "Magesh Chandramouli is an Associate Professor of Computer Graphics Technology in Purdue University Northwest. He has been invited to deliver keynote speeches and lectures in various countries and universities around the world. Formerly a Frederick Andrews Fellow at Purdue University, West Lafayette, he completed his doctoral studies from the Department of Computer Graphics Technology. After completing his undergraduate studies from College of Engineering, Guindy (India), he completed Master of Engineering from the National University of Singapore and Master of Science from University of Calgary.",
    image: magesh,
  },
  {
    name: "Ge Jin",
    role: "Co-Principal Investigator",
    description:
      "Ge Jin is currently an associate professor in the Department of Computer Information Technology and Graphics at the Purdue University Northwest. He holds a B.S. in Computer Science from Peking University, China, and an M.S. in Computer Science from Seoul National University, South Korea. He earned his Doctor of Science degree in Computer Science with a concentration in computer graphics from the George Washington University. His research spans the fields of computer graphics, virtual reality, computer animation, medical visualization, and educational game development.",
    image: gejin,
  },
  {
    name: "Ismail Fidan",
    role: "Co-Principal Investigator",
    description:
      "Fidan serves as a Professor of the Department of Manufacturing and Engineering Technology at Tennessee Technological University. His research and teaching interests are in additive manufacturing, electronics manufacturing, distance learning, and STEM education. Dr. Fidan is a member and active participant of SME, ASEE, ABET, ASME, and IEEE. He is also the Associate Editor of IEEE Transactions on Components, Packaging, and Manufacturing Technology and International Journal of Rapid Manufacturing.",
    image: fidan,
  },
  {
    name: "Ms. Imelda Cossette",
    role: "Co-Principal Investigator",
    description:
      "Ms. Cossette is the Executive Director and Principal Investigator for the National Resource Center for Materials Technology Education (MatEdU) and Project: Technician Education in Additive Manufacturing & Materials (TEAMM) funded by National Science Foundation’s Advanced Technological Education Program housed at Edmonds Community College in Lynnwood, WA. Mel has over 25+ years of experience in manufacturing education, has developed technician training programs for industry and educational institutions, serves on numerous committees and national boards and worked in various industries prior to holding administrative positions in the community and technical college system.",
    image: cossette,
  },
  {
    name: "Wayne Merrell",
    role: "Former Co-Principal Investigator",
    description:
      "Merrell currently serves Eastern Iowa Community Colleges as the U.S. Department of Labor grants administrator. He is Co-principal Investigator for project titled 3D ImPACT: Integrated Project Approach to College Teaching fundecd by National Science Foundation’s Advanced Technological Education Program. Prior to his service with EICC, he served professionally in the following capacities: Provost, Rainy River Community College, International Falls, MN; Academic Dean, Des Moines Area Community College, Ankeny, IA; Professor, Iowa State University, Ames, IA; Professor, Purdue University, West Lafayette, IN; Aerospace Engineer, Morton-Thiokol, Inc., Brigham City, UT; space shuttle solid rocket boosters; and High School Instructor, Ute Indian Reservation, Roosevelt, UT.",
    image: merrell,
  },
  {
    name: "Mr. Andrew Kemendo",
    role: "External-Consultant",
    description:
      "Ms. Cossette is the Executive Director and Principal Investigator for the National Resource Center for Materials Technology Education (MatEdU) and Project: Technician Education in Additive Manufacturing & Materials (TEAMM) funded by National Science Foundation’s Advanced Technological Education Program housed at Edmonds Community College in Lynnwood, WA. Mel has over 25+ years of experience in manufacturing education, has developed technician training programs for industry and educational institutions, serves on numerous committees and national boards and worked in various industries prior to holding administrative positions in the community and technical college system. You are currently previewing Jekyll template demo.",
    image: andrew,
  },
  {
    name: "Mr. David McLees",
    role: "Technical Support Consultant",
    description:
      "David McLees is the Technology Administrator for the College of Technology at Purdue University Northwest. He works closely with faculty and staff on developing and maintaining the learning environments that make up the college's computer based labs. David has developed a special interest in the use of interactive multimedia to enhance laboratory-based distance learning courses.",
    image: mcleese,
  },
  {
    name: "Mr. Daniel Cubillos",
    role: "Graduate Student - Research Assistant",
    description:
      "Daniel Cubillos is a Master Graduate from Purdue University Northwest; bachelor was in Computer Graphics Technology, and Masters in Modeling, Simulation, and Visualization. He has published several academic papers and participated in national conferences, such as winning 3rd place at HOUSTEX. His passion is digital design, 3D modeling, and virtual reality development (VR). Daniel has worked on various VR modules under the mentoring of Prof. Chandramouli and Prof. Jin for NSF Project MANEUVER.",
    image: daniel,
  },
];

export const advisoryBoard = [
  {
    name: "Stewart Harris",
    role: "MANEUVER Advisory Board Chair",
    department:
      "Program Coordinator, Advanced Integrated Manufacturing (AIM), Thomas Nelson Community College",
    description:
      "Stewart(Stu) Harris retired from NASA Langley Research Center in 2013, with over 40 years of service. Stu was the recipient of numerous awards including the NASA Exceptional Service Medal and the Exceptional Leadership Medal. Stewart Harris leads the development of the Advanced Integrated Manufacturing strategy at Thomas Nelson Community College. His leadership includes establishing partnerships with industry, development of curricula, coordination of grants, and site location of a Center for a comprehensive program in education and workforce development to provide multi-skilled technicians for advanced integrated manufacturing in the region. Stu serves in advisory roles for the National Science Foundation and the State of Virginia. He currently chairs the Commonwealth of Virginia's Career and Technical Advisory Committee. This committee serves in an advisory role to Virginia's State Board of Education.",
    image: harris,
  },
  {
    name: "Mohammad Zahraee",
    role: "Associate Dean and Professor",
    department: "College Of Technology, Purdue University Northwest",
    description:
      "Mohammad Zahraee holds Bachelor Degree in Mechanical Engineering from Southern Illinois University, MS in Structural Engineering and PhD in Engineering Mechanics both from University of Illinois at Chicago. Mohammad joined Purdue University Calumet in 1989 and was the Head of the Manufacturing Engineering Technologies and Supervision Department from 1996 through 2007. He was also acting head of Electrical and Computer Engineering Technology Department from 2000 through December 2006. Zahraee served ABET from 1992 through 2016 as a program evaluator, commissioner (Accreditation Team Chair), National Chair of the Engineering Technology accreditation commission of ABET during 2009-2010, a Board of Delegates member 2011-2014, and was a member of the Board of Directors of ABET from 2014 through 2016 as a representative of American Society of Mechanical Engineers (ASME). He chairs the Graduate Education Council in the College of technology and advises all incoming graduate students.",
    image: zahraee,
  },
  {
    name: "Adam Cook",
    role: "Chief Technical Officer",
    department: "Alliedstrand",
    description:
      "Adam Cook is a systems engineer with over a decade of experience in designing automation equipment, production machinery and industrial software. He is Chief Technical Officer of Alliedstrand and Chair of SME Chapter 112. He is also a contributor to the SME Virtual Network which seeks to empower students and engineering professionals with value-added webinars and workshops on digital manufacturing topics. Adam Cook is a graduate of Purdue University West Lafayette.",
    image: adam,
  },
  {
    name: "Dhananjay Sewak",
    role: "Technology Adoption Manager",
    department: "Purdue University Manufacturing Extension Partnership",
    description:
      "Dhananjay spent nine years at Cummins in Columbus. Dhananjay's previous roles were Project Manager in Functional Excellence, Product Engineering Reliability Leader in Customer Engineering, Technical Leader in New Product Introduction, and Senior Engineer in Product Tailoring. He has a Bachelor of Engineering degree in Mechanical Engineering from the University of Pune, India; a Master of Science degree in Industrial Engineering from the University of Toledo, Ohio; and an MBA from Indiana University's Kelley School of Business in Indianapolis.",
    image: dhananjay,
  },
  {
    name: "Chris Beck",
    role: "Manager of Operations and Co-Owner",
    department: "Innovative 3D Manufacturing",
    description:
      "Chris Beck has 20 yrs plus experience split equally between Manufacturing and Finance. His manufacturing background has been broad sector based covering High Volume Automotive, Aerospace, Medical and the Heavy Duty Off Road Diesel market. His daily duties include Managing operations of Innovative 3D Manufacturing which is a low volume prototype company that focuses on Metal 3D Printing and machining protoypes from solid billet material. He is also in charge of customer development and relationships for I3DM and our sister company Innovative Casting Technology, which primarily service the Aerospace, Medical and Heavy Duty Off Road Diesel fuel systems market. Innovative 3D has three core principles that govern the company's operations: High quality, fast delivery and outstanding customer service.",
    image: chris,
  },
];

export const outcomes = [
  {
    description:
      "MOOC videos added for use by non-workshop participants; all materials including VR code shared with participants.",
  },
  {
    description:
      "DEMO on the use of low-cost VR for STEM application at the annual NSF-ATE/AACC conference - url (Washington DC, Nov.2017).",
  },
  {
    description:
      "Keynote Lecture at the National M-STEM Conference (VA, Nov 2017) on the use of affordable VR in STEM education including digital manufacturing and few other areas.",
  },
  {
    description:
      "Explanation of use of low-cost VR for smart manufacturing applications",
  },
  {
    description:
      "PI/Co-PIs submitted 2 papers (abstract accepted, draft paper-in-review) to the American Society of Engineering Education Conference (2018). \n- Virtual Reality Education Modules for Digital Manufacturing Instruction. \n- A Comparative Study on Affordable Photogrammetry Tools.",
  },
  {
    description:
      "Co-PI Jin published paper KISS: Development of VR games for rehabilitation.",
  },
  {
    description:
      "Created 3D VR simulations for subtractive digital manufacturing machinery: computer numerical control (CNC) machine.",
  },
  {
    description:
      "Completed proof-of-concept study showing two intuitive photogrammetry software tools that could be learned and practiced easily for 3D model generation.",
  },
  {
    description:
      "PI Chandramouli was awarded the 2018 Warner Professional Practice Award for Region 3 by the Board of Directors of Epsilon Pi Tau and will be included as a 2018 Warner Award winner in the next issue of the EPT Preceptor newsletter.",
  },
  {
    description:
      "Created MOOC-compliant content for broader dissemination and access \n- MOOC Instructional Videos with Voice Over. \n- MOOC Instructional Videos with Captions.",
  },
];

export const publications = [
  {
    title: "Magesh Chandramouli, Ge Jin, Daniel Cubillos",
    description:
      '"MOOC Videos in Project MANEUVER", IEEE 2019 Learning With MOOCS (LWMOOCS), 23-25 October, 2019, Milwaukee, WI, USA.',
    image: ieee,
  },
  {
    title: "Magesh Chandramouli, Ge Jin, Daniel Cubillos, Justin Heffron",
    description:
      '"A Systematic Analysis of Graphics-Based Hardware and Software for Virtual Reality Instructional Framework", ASEE EDGD 73rd Midyear Conference, January 6 - 8, 2019, Berkeley, CA.',
    image: edgd,
  },
  {
    title: "Daniel Cubillos, Magesh Chandramouli",
    description:
      '"Picture Exchange Communication System (PECS) Mediums: Comparative Analysis", ASEE EDGD 73rd Midyear Conference, January 6 - 8, 2019, Berkeley, CA.',
    image: edgd,
  },
  {
    title: "Ge Jin, Keyuan Jiang, Sangmin Lee",
    description:
      '"Development of Virtual Reality Games for Motor Rehabilitation". Journal of Telecommunication, Electronic and Computer ,Engineering (JTEC). 10(4), 87-94. ISSN: 2180-1843.',
    image: jtec,
  },
  {
    title:
      "Magesh Chandramouli, Ge Jin, Justin Heffron, Ismail Fidan, Mel Cossette, Cheryl A. Welsch, Wayne Merrell",
    description:
      '"Virtual Reality Education Modules for Digital Manufacturing Instruction", Accepted by the 125th ASEE Annual Conference & Exposition, June 24 - 27, 2018, Salt Lake City, Utah.',
    image: asee,
  },
  {
    title: "John Fraley, Astrit Imeri, Ismail Fidan, Magesh Chandramouli",
    description:
      '"A Systematic Analysis of Graphics-Based Hardware and Software for Virtual Reality Instructional Framework", ASEE EDGD 73rd Midyear Conference, January 6 - 8, 2019, Berkeley, CA.',
    image: asee,
  },
  {
    title:
      "Ge Jin, Manghui Tu, Tae-Hoon Kim, Justin Heffron, and Jonathan White",
    description: `"Game based Cybersecurity Training for High School Students". In Proceedings of the 49th ACM Technical Symposium on Computer Science Education (SIGCSE '18). ACM, New York, NY, USA, 68-73.`,
    image: asee,
  },
  {
    title: "Ge Jin, Keyuan Jiang, Sangmin Lee",
    description: `"Development of Virtual Reality Games for Motor Rehabilitation". KSII The 9th International Conference on Internet (ICONI) 2017. December 17-20, 2017, Vientiane, Laos.`,
    image: iconi,
  },
];

export const activities = [
  {
    description:
      "In summer 2019, PNW, TTU and EDCC delivered 2-day NSF Digital Manufacturing Workshops to Community College instructors and high School teachers throughout U.S.",
  },
  {
    description:
      "In summer 2018, PNW, TTU and EDCC delivered 2-day NSF Digital Manufacturing Workshops to Community College instructors throughout U.S.",
  },
  {
    description:
      "Developed Digital Manufacturing (DM) Concept Inventory for Technician Training through Qualitative Survey among the PI/Co-PIs.",
  },
  {
    description:
      "Design of a customizable curriculum framework & Learning Activity Design. Collected input from 2/4 Year colleges with regard to: curriculum, infrastructure, & intellectual support.",
  },
  {
    description:
      "Developed 3D Virtual Reality (VR) Worlds for DM Modules & Learning Activities; Modules were developed simultaneously for both Augmented and Desktop VR Modes.",
  },
  {
    description:
      "Developed and customized multiple modes of VR Modules for Desktop and Augmented Modes (dVR/aVR).",
  },
  {
    description:
      "Programmed VR scenes for interaction using standard affordable I/O devices, and decoupled 3D DM instruction database from UI functionalities.",
  },
  {
    description:
      "Simulated the functioning of three popular 3D printing devices namely UPrint™, LutzBot™, and FormLabs™ Created 3D VR simulations for subtractive digital manufacturing machinery: computer numerical control (CNC) machine.",
  },
  {
    description:
      "EDCC: 3D models and simulation videos built during the project year",
  },
  {
    description:
      "Pre-Visualization Module: Additive Manufacturing Product Comparison Learning Activity Design: Provide student VR users with an opportunity to compare a designated printed part by additive manufacturing machines available from three separate processes, i.e., fused deposition, stereolithography, powder bed.",
  },
  {
    description:
      "Pre-Activity Discussion: Learning Activity and Assignment Specifications: Provide student VR user with materials and equipment needed to create the same part on three different AM machines, e.g., LutzBot™, FormLabs™, and UPrint™. Student can utilize three different types of equipment to understand that the same technology can be demonstrated in different processes and still produce a similar product. Compare and contrast the different types of materials and processes.",
  },
  {
    description:
      "Carried out detailed studies on alternative ways to generate 3D solid model without using costly 3D scanning technology.",
  },
  {
    description:
      "Prepared materials for the Workshop to be offered during Summer 2018 (XXXX – Bullet item from Description). During this ‘Train the Trainers’ Workshop, the participants (community college teachers) will trained on the VR modules developed and detailed feedback will be obtained from Work Groups.",
  },
  {
    description: "Constituted 'Advisory Board' for NSF Project MANEUVER.",
  },
  {
    description:
      "Review curriculum for VR functionality: assembly, evaluation, analysis, and training",
  },
];

export const virtualRealityLinks = {
  // "what-is-vr": {
  //   title: "What is Virtual Reality?",
  //   url: "/vr/what-is-vr",
  //   image: vrPerson,
  //   description: `Virtual Reality (VR), also referred to as immersive technology, simulates a three dimensional physical reality through digital technology. Users can interact with elements of this simulated reality or be immersed within entire virtual environments as if the digital simulations were physically present.

  //   Virtual Reality provides an umbrella term for a wide variety of immersive experiences, which can be created using purely real-world content, purely computer generated content or a hybrid of both. Virtual Reality has created a lot of buzz over the last few years as hardware, software, and computing power are finally coming together to provide a sense of immersion sufficiently sophisticated to trick the human brain into sensing a genuine reality.

  //   Content-viewing hardware, of which Head-Mounted Displays (HMDs) are getting the most press, range from Google Cardboard (using a mobile phone) to HTC Vive (creating room sized interactable simulations) are currently taking center stage. They offer much more immersive experiences than what we have come to expect from the “window into a 3D world” we get from games or CAD on standard monitors. They also offer a more convincing immersive experience at much more economical price than a CAVE style system and they are exponentially more versatile than mission specific VR experiences like professional Flight Simulators.`,
  //   content: `<img src=${vrPerson} alt="vr1">
  //   <p>Virtual Reality (VR), also referred to as immersive technology, simulates a three dimensional physical reality through digital technology. Users can interact with elements of this simulated reality or be immersed within entire virtual environments as if the digital simulations were physically present.</p>
  //   <p>Virtual Reality provides an umbrella term for a wide variety of immersive experiences, which can be created using purely real-world content, purely computer generated content or a hybrid of both. Virtual Reality has created a lot of buzz over the last few years as hardware, software, and computing power are finally coming together to provide a sense of immersion sufficiently sophisticated to trick the human brain into sensing a genuine reality.</p>
  //   <p>Content-viewing hardware, of which Head-Mounted Displays (HMDs) are getting the most press, range from Google Cardboard (using a mobile phone) to HTC Vive (creating room sized interactable simulations) are currently taking center stage. They offer much more immersive experiences than what we have come to expect from the “window into a 3D world” we get from games or CAD on standard monitors. They also offer a more convincing immersive experience at much more economical price than a CAVE style system and they are exponentially more versatile than mission specific VR experiences like professional Flight Simulators.</p>
  //   `,
  // },
  "content-types": {
    title: "VR Content Types",
    url: "/vr/content-types",
    image: vrContentTypes,
    description: `Immersive videos, more recently known as 360° Videos, are video recordings of real-world scenes, where the view in every direction is recorded at the same time. During playback the viewer has control of the viewing direction.

    360° video is an immersive experience using pre-filmed real-world content as the central media. As the industry deliberates on definitions and terminology, some contend that 360° Video, with its real-world content, is not the same as “real VR,” using computer generated content, and the terms should not be interchangeable.`,
    content: `<img src=${vrContentTypes} alt="vr2">
    <h5>360° Video VR</h5>
    <p>Immersive videos, more recently known as 360° Videos, are video recordings of real-world scenes, where the view in every direction is recorded at the same time. During playback the viewer has control of the viewing direction.</p>
    <p>360° video is an immersive experience using pre-filmed real-world content as the central media. As the industry deliberates on definitions and terminology, some contend that 360° Video, with its real-world content, is not the same as “real VR,” using computer generated content, and the terms should not be interchangeable.</p>
    <h5>Computer Generated VR</h5>
    <p>Computer Generated VR is an immersive experience created entirely from computer-generated (i.e. not real-world) content. It can be pre-rendered and non-interactive (similar to 360° Video) or rendered in real time using a computer or gaming engine to provide complete interactivity.</p>
    <p>There is a third type of VR, which is a hybrid between 360° video and CG, where an immersive experience is created using a blend of both content types. There is no accepted term for this ‘third way’ of creation, but imagine it like any recent blockbuster movie where, at any moment, what you are seeing on screen is a composite of both real-world footage and computer generated (CG) content. Today it is almost impossible to tell which is which.</p>
    <h5>Desktop VR (dVR)</h5>
    <p>Desktop VR is a 3D representation that users can interact with on computer screens either with 3D glasses or simply as a 3D representation of an object or environment on screen. Desktop VR, in this sense, can be thought of as looking through a window (the computer monitor) into a 3D world. For design and gaming applications this perception of 3D has become increasingly powerful over the last 30 years. At this point, some level of desktop 3D is expected in these applications.</p>
    <h5>Augmented VR (aVR)</h5>
    <p>Augmented Reality is defined in the industry as a live, direct or indirect view of a physical, real-world environment whose elements are augmented by computer-generated sensory input such as sound, video, graphics or GPS data.</p>
    <p>Whether you are wearing clear glasses or a full headset, aVR presents an image of the real world augmented by an overlay of content. However, the intent is to provide augmented content without the goal of having that content perceived as an integrated part of the real world. The user can interact with the real-world content and/or the CG content, but the content itself is not primarily intended to appear to, directly or physically, interact with the real world.There is a third type of VR, which is a hybrid between 360° video and CG, where an immersive experience is created using a blend of both content types. There is no accepted term for this ‘third way’ of creation, but imagine it like any recent blockbuster movie where, at any moment, what you are seeing on screen is a composite of both real-world footage and computer generated (CG) content. Today it is almost impossible to tell which is which.</p>
    <h5>Mixed Reality (mVR))</h5>
    <p>Mixed Reality (mVR) is sometimes referred to as hybrid reality. It is the intentional merging of real and virtual worlds to produce new environments and visualizations where physical and digital objects co-exist and interact in real time.</p>
    <p>Think of mVR as an overlay of synthetic content on the real world that is anchored to and interacting with the real world in real time. The key characteristic of mVR is that the synthetic content and the real-world content are able to react to each other in real time. If you were a surgeon, for example, you might view a live overlay of ultrasound images on your patient while performing an operation. There is some debate about whether aVR and mVR will be, or should be, distinguished from one another as the technology develops.</p>
    <h5>Immersive VR (iVR))</h5>
    <p>Immersive virtual reality environment is most often associated with a CAVE automatic virtual environment. CAVE systems were developed in the early 1990s and use projectors that are directed to between three and six of the walls of a room-sized cube. It is worth noting that many Flight Simulators also use detailed simulations projected outside a functioning cockpit mockup sometimes mounted on gimbals to simulate the physical sensation of flight.</p>`,
  },
  "maneuver-framework": {
    title: "MANEUVER VR Framework",
    url: "/vr/maneuver-framework",
    image: maneuverVRFramework,
    description: `Immersive videos, more recently known as 360° Videos, are video recordings of real-world scenes, where the view in every direction is recorded at the same time. During playback the viewer has control of the viewing direction.

    360° video is an immersive experience using pre-filmed real-world content as the central media. As the industry deliberates on definitions and terminology, some contend that 360° Video, with its real-world content, is not the same as “real VR,” using computer generated content, and the terms should not be interchangeable.`,
    content: `Immersive videos, more recently known as 360° Videos, are video recordings of real-world scenes, where the view in every direction is recorded at the same time. During playback the viewer has control of the viewing direction.

    360° video is an immersive experience using pre-filmed real-world content as the central media. As the industry deliberates on definitions and terminology, some contend that 360° Video, with its real-world content, is not the same as “real VR,” using computer generated content, and the terms should not be interchangeable.`,
    content: `<img src=${maneuverVRFramework} alt="vr3">
    <h5>360° Video VR</h5>
    <p>Immersive videos, more recently known as 360° Videos, are video recordings of real-world scenes, where the view in every direction is recorded at the same time. During playback the viewer has control of the viewing direction.</p>
    <p>360° video is an immersive experience using pre-filmed real-world content as the central media. As the industry deliberates on definitions and terminology, some contend that 360° Video, with its real-world content, is not the same as “real VR,” using computer generated content, and the terms should not be interchangeable.</p>
    <h5>Computer Generated VR</h5>
    <p>Computer Generated VR is an immersive experience created entirely from computer-generated (i.e. not real-world) content. It can be pre-rendered and non-interactive (similar to 360° Video) or rendered in real time using a computer or gaming engine to provide complete interactivity.</p>
    <p>There is a third type of VR, which is a hybrid between 360° video and CG, where an immersive experience is created using a blend of both content types. There is no accepted term for this ‘third way’ of creation, but imagine it like any recent blockbuster movie where, at any moment, what you are seeing on screen is a composite of both real-world footage and computer generated (CG) content. Today it is almost impossible to tell which is which.</p>
    <h5>Desktop VR (dVR)</h5>
    <p>Desktop VR is a 3D representation that users can interact with on computer screens either with 3D glasses or simply as a 3D representation of an object or environment on screen. Desktop VR, in this sense, can be thought of as looking through a window (the computer monitor) into a 3D world. For design and gaming applications this perception of 3D has become increasingly powerful over the last 30 years. At this point, some level of desktop 3D is expected in these applications.</p>`,
  },
  "desktop-vr": {
    title: "Desktop VR",
    url: "/vr/desktop-vr",
    image: desktopVR,
    description: `It is important to briefly look at the concepts of additive and subtractive manufacturing to understand why the modules have been generated. Subtractive manufacturing involves creating objects by removing (or subtracting) material from a solid block of material (e.g. metal). Typically, machinery and components manufactured with a CNC Machine fall under this category. This cutting is actually done in the 3D space (x, y, z) and numerous advances have been made in CNC machine technology over the years that have greatly enhanced the processes. On the other hand, with additive manufacturing objects are built by consecutively placing material in the form of layers (one on top of the other) so as to create a specific shape. Depending on the actual product and industry, these steps may change but these represent some of the basic steps generally followed in additive manufacturing processes.`,
    content: `<p>It is important to briefly look at the concepts of additive and subtractive manufacturing to understand why the modules have been generated. Subtractive manufacturing involves creating objects by removing (or subtracting) material from a solid block of material (e.g. metal). Typically, machinery and components manufactured with a CNC Machine fall under this category. This cutting is actually done in the 3D space (x, y, z) and numerous advances have been made in CNC machine technology over the years that have greatly enhanced the processes. On the other hand, with additive manufacturing objects are built by consecutively placing material in the form of layers (one on top of the other) so as to create a specific shape. Depending on the actual product and industry, these steps may change but these represent some of the basic steps generally followed in additive manufacturing processes.</p><br/><img src=${desktopVRFlow} alt="Process of Additive Manufacturing"> <center>Process of Additive Manufacturing</center>
    <p>When viewed with standard desktop virtual reality on standard web browsers, additional low-cost devices such as TouchPad and Stylus Pen can be used to enhance interactions and navigation functionalities.</p><img src=${desktopVR} alt="Interaction with 3D World Using Standard Affordable I/O devices"> <center>Interaction with 3D World Using Standard Affordable I/O devices</center>`,
  },
  "simulation-of-3d-printers": {
    title: "VR Simulation of 3D Printers",
    url: "/vr/simulation-of-3d-printers",
    image: vrSimulation3dPrinters1,
    description: `Comparing different additive manufacturing products and technologies will provide students with an opportunity to compare a designated printed part by additive manufacturing machines available from three different companies, e.g., LutzBot™, FormLabs™, and UPrint™. The 3D printing technologies that employ these machines are Fused Deposition Modeling (FDM) technology (LutzBot™, and UPrint™) and Stereolithography technology (FormLabs™). The VR learning modules simulating different additive manufacturing technologies will provide students with materials and equipment needed to create the same part on three different AM machines. Students can utilize three different types of equipment to understand that the same technology can be demonstrated in different processes and still produce a similar product. Figure below shows the simulation of three popular 3D printing devices namely UPrint™, LutzBot™, and FormLabs™, from left to right.`,
    content: `<p>Comparing different additive manufacturing products and technologies will provide students with an opportunity to compare a designated printed part by additive manufacturing machines available from three different companies, e.g., LutzBot™, FormLabs™, and UPrint™. The 3D printing technologies that employ these machines are Fused Deposition Modeling (FDM) technology (LutzBot™, and UPrint™) and Stereolithography technology (FormLabs™). The VR learning modules simulating different additive manufacturing technologies will provide students with materials and equipment needed to create the same part on three different AM machines. Students can utilize three different types of equipment to understand that the same technology can be demonstrated in different processes and still produce a similar product. Figure below shows the simulation of three popular 3D printing devices namely UPrint™, LutzBot™, and FormLabs™, from left to right.</p><img src=${vrSimulation3dPrinters1} alt="VR Simulation of three 3D printing machines (UPrint™, LutzBot™, FormLabs™)"> <center>VR Simulation of three 3D printing machines (UPrint™, LutzBot™, FormLabs™)</center>
    <p>For the Additive Manufacturing comparison module, we will present the simulation results of two distinct 3D printing technologies: FDM and Stereolithography. For the FDM technology simulation, a pre-imported mesh was used to test the functionality of the 3D printer system with the LutzBot™ 3D printer. However, it is required that users be able to import their own models to see how the process works. In order to accomplish this, the same basic system from importing in the ideation scene was used. In this system, a model is loaded from the local directory and placed in an empty game object in the scene. A new empty game object prefab was created for the printer scene since this required a different material than the models imported in the previous scene. The simulation result of fused deposition modeling with LutzBot™ 3D printer is shown below.</p><img src=${vrSimulation3dPrinters2} alt="Simulation of Fused Deposition Modeling Technology with LutzBot™ 3D Printer"> <center>Simulation of Fused Deposition Modeling Technology with LutzBot™ 3D Printer</center>
    <p>To simulate stereolithography technology, The FormLabs™ 3D printer requires a new script for handling the motion of the printer. Unlike the FDM based 3D printer (and other standard filament printers) the FormLabs™ 3D printer creates material with PLA resin rather than strings of plastic filament. The motion consists of a printer head attached to the printer mesh which gradually pulls the mesh out of the vat of liquid. A scraper moves along the liquid to level it when the printer head is raised and a laser solidifies the material when the head is down and in the correct position. In order to create the motion of parts stopping and waiting for other parts, a co-routine was used. Co-routines are functions which run parallel to the main program and do not stop the functioning of the main program while loops are running. One can include a return inside of loops to cause only one iteration to run each frame. It also has return functions for waiting where after a defined number of seconds, the co-routine will resume running. Two different routines are used for the printer head and scraper. The scraper will only move while the head is moved up and is waiting to move down again. The laser motion runs when the FormLabs™ 3D printer head is down. It generates a random position within the printer bounds to simulate the rapid jumping around of the real printer. A co-routine is run with wait functions, albeit very fast ones, to change the position every tenth of a second (6 frames) rather than every frame. Figure. 13 shows the simulation result of stereolithography technology with FormLabs™ 3D printer.</p><img src=${vrSimulation3dPrinters3} alt="Simulation of Stereolithography Technology with FormLabs™ 3D Printer"> <center>Simulation of Stereolithography Technology with FormLabs™ 3D Printer</center>`,
  },
  "simulation-of-cnc": {
    title: "VR Simulation of CNC",
    url: "/vr/simulation-of-cnc",
    image: vrSimulationCnc,
    description: `This page discusses the simulation of one major subtractive digital manufacturing machinery: computer numerical control (CNC) machine. Both additive manufacturing simulation and CNC simulation were developed in Unity3D game engine. To simulate the virtual CNC milling process, three game development techniques were employed including a NavMesh system, a mesh collider and a Mesh voxelizer. The mesh voxelizer will pre-process the final 3D model of product to be manufactured, and subdivide the mesh into thousands of small cubes. The mesh collider will determine if the drill head touches individual voxelized cube based on the drill head movement. If the drill head touches the cube, the touched cube will be removed from the scene, thus simulating the subtractive manufacturing effect. The NavMesh system utilizes built-in Artificial Intelligent (AI) pathfinding system. The final output mesh would be marked as a non-walkable agent, meaning the moving milling head would avoid touching it. The remaining area to be carved out would then be procedurally baked for NavMesh movement. Alternatively, the final mesh in the center can be defined as a step, meaning the AI drill bit would move over it while moving up vertically. This would give the appearance of the drill bit excluding the mesh while still moving in a normalized and predictable pattern. One possible movement path would be to have the drill bit move left and right in rows while moving up each time that a row is completed. The destination point of the NavMesh agent can be dynamically set via coding.`,
    content: `<p>This page discusses the simulation of one major subtractive digital manufacturing machinery: computer numerical control (CNC) machine. Both additive manufacturing simulation and CNC simulation were developed in Unity3D game engine. To simulate the virtual CNC milling process, three game development techniques were employed including a NavMesh system, a mesh collider and a Mesh voxelizer. The mesh voxelizer will pre-process the final 3D model of product to be manufactured, and subdivide the mesh into thousands of small cubes. The mesh collider will determine if the drill head touches individual voxelized cube based on the drill head movement. If the drill head touches the cube, the touched cube will be removed from the scene, thus simulating the subtractive manufacturing effect. The NavMesh system utilizes built-in Artificial Intelligent (AI) pathfinding system. The final output mesh would be marked as a non-walkable agent, meaning the moving milling head would avoid touching it. The remaining area to be carved out would then be procedurally baked for NavMesh movement. Alternatively, the final mesh in the center can be defined as a step, meaning the AI drill bit would move over it while moving up vertically. This would give the appearance of the drill bit excluding the mesh while still moving in a normalized and predictable pattern. One possible movement path would be to have the drill bit move left and right in rows while moving up each time that a row is completed. The destination point of the NavMesh agent can be dynamically set via coding.</p><br/><img src=${vrSimulationCnc} alt="VR Simulation of three 3D printing machines (UPrint™, LutzBot™, FormLabs™)"> <center>VR Simulation of Computer Numerical Control Machinery</center>`,
  },
  "interaction-in-vr": {
    title: "Interaction in VR",
    url: "/vr/interaction-in-vr",
    image: interactionInVr,
    description: `The third topic for VR training module is virtual product assembly. Digitally manufactured parts from either additive manufacturing or subtractive manufacturing need to be assembled to become a product. Currently, the virtual assembly process was implemented using simple 3D geometric shapes to focus on the user interaction with virtual 3D parts. A user can also import digitally manufactured 3D part file to be assembled with another part. Figure. 9 shows three main functionalities of virtual product assembly process. A user can use the ‘W’, ‘A’, ‘S’, and ‘D’ keyboard key to move and navigate a 3D scene. A keyboard shortcut key 'I' can be used to import the mesh that represents a digitally manufactured 3D part. Keyboard shortcut key ‘E’ will be used to pick up and move a 3D part to a new location to assemble with other 3D parts.`,
    content: `<p>The third topic for VR training module is virtual product assembly. Digitally manufactured parts from either additive manufacturing or subtractive manufacturing need to be assembled to become a product. Currently, the virtual assembly process was implemented using simple 3D geometric shapes to focus on the user interaction with virtual 3D parts. A user can also import digitally manufactured 3D part file to be assembled with another part. Figure. 9 shows three main functionalities of virtual product assembly process. A user can use the ‘W’, ‘A’, ‘S’, and ‘D’ keyboard key to move and navigate a 3D scene. A keyboard shortcut key ‘I’ can be used to import the mesh that represents a digitally manufactured 3D part. Keyboard shortcut key ‘E’ will be used to pick up and move a 3D part to a new location to assemble with other 3D parts.</p><br/><img src=${interactionInVr} alt="VR Simulation of three 3D printing machines (UPrint™, LutzBot™, FormLabs™)"> <center>Basic Interaction within the 3D World for Virtual Product Assembly</center>`,
  },
};

export const manufacturingLinks = {
  "what-is-manufacturing": {
    title: "What is Digital Manufacturing?",
    url: "/manufacturing/what-is-manufacturing",
    image: smartManufacturing,
    description: `Digital Manufacturing (DM) is one of the commonly used manufacturing technologies which is centered around a computer system. A machine is able to read a CAD (computer aided design) file in order to make it in a few minutes. Within the same process, it is possible to prototype, produce and fabricate molds and patterns to aid production . The name comes from the rise of computer systems in manufacturing plants. Today’s manufacturing uses the computer tools in design (or solid modeling), simulation, and analysis of almost all steps in order to increase the efficiency of manufacturing processes. In this sense, DM shares the common goals of additive manufacturing (AM), computer numerical control (CNC), computer-integrated manufacturing (CIM), flexible manufacturing, lean manufacturing, and design for manufacturability (DFM) . However, Project MANEUVER does not cover the concept of Smart Manufacturing (SM) since SM is more focused on data and information management and control, and DM is a part of the whole SM concept . Figure 1shows a representation of today’s advancing manufacturing environment.One important part of the current project is to provide an easy-to-learn and easy-to-use design and modeling environment to generate 3D solid models for use in DM and VR applications.`,
    content: `<h1>What is Digital Manufacturing?</h1>
    <p>Digital Manufacturing (DM) is one of the commonly used manufacturing technologies which is centered around a computer system. A machine is able to read a CAD (computer aided design) file in order to make it in a few minutes. Within the same process, it is possible to prototype, produce and fabricate molds and patterns to aid production . The name comes from the rise of computer systems in manufacturing plants. Today’s manufacturing uses the computer tools in design (or solid modeling), simulation, and analysis of almost all steps in order to increase the efficiency of manufacturing processes. In this sense, DM shares the common goals of additive manufacturing (AM), computer numerical control (CNC), computer-integrated manufacturing (CIM), flexible manufacturing, lean manufacturing, and design for manufacturability (DFM) . However, Project MANEUVER does not cover the concept of Smart Manufacturing (SM) since SM is more focused on data and information management and control, and DM is a part of the whole SM concept . Figure 1shows a representation of today’s advancing manufacturing environment.One important part of the current project is to provide an easy-to-learn and easy-to-use design and modeling environment to generate 3D solid models for use in DM and VR applications.</p><img src=${smartManufacturing} alt="Dm"> <center>Building Blocks of Smart Manufacturing</center>`,
  },
  "software-tools": {
    title: "Free Software Tools",
    url: "/manufacturing/software-tools",
    image: softwareTools,
    description: `TinkerCAD is a simple, online 3D design and 3D printing app for any STEM educator. It is commonly used by designers, makers, hobbyists, artists, and kids, to make products, toys, prototypes, home decor, and jewelry. Tinkercad is an easy, browser-based 3D design and modeling tool for all. It allows users to imagine anything and then design it in minutes. The software tool has a very well-prepared support knowledge base and can easily be accessed via any web browser.`,
    content: `<h5>TinkerCAD</h5>
    <p>TinkerCAD is a simple, online 3D design and 3D printing app for any STEM educator. It is commonly used by designers, makers, hobbyists, artists, and kids, to make products, toys, prototypes, home decor, and jewelry. Tinkercad is an easy, browser-based 3D design and modeling tool for all. It allows users to imagine anything and then design it in minutes. The software tool has a very well-prepared support knowledge base and can easily be accessed via any web browser.</p>
    <h5>BloksCAD</h5>
    <p>BlocksCAD is an education technology company dedicated to creating tools that help students of all ages pursue their love of science, technology, engineering, art, and math (STEAM) . Company’s signature product, BlocksCAD, is a cloud-based 3D modeling design tool that encourages users to learn math, computational thinking and coding concepts through visualization and designing models to be 3D printed. There are very well-prepared training resources and Youtube channel to help any BlocksCAD user.</p>
    <h5>Autodesk Meshmixer</h5>
    <p>Meshmixer is a free and hybrid modeler for all type of meshes. This software tool is commonly used in several 3D applications. It is good for working with all type of stl files. It is used for fixing, manipulating, and evaluation. Software could be downloaded via http://www.meshmixer.com/. Its support manual is available at http://mmmanual.com/. There are several video examples available at Youtube.</p>
    <h5>Onshape</h5>
    <p>Onshape is the first and only full-cloud 3D CAD system that lets everyone on a design team work together using any web browser, phone, or tablet. Onshape was built from scratch for the way today’s engineers, designers and manufacturers really work, giving them secure and simultaneous access to a single master version of their CAD data without the hassles of software licenses or copying files . Further information could be obtained from Wikipedia and Onshape Learning Center.</p>
    <h5>Autodesk Fusion 360</h5>
    <p>Fusion 360 is a 3D CAD, CAM, and CAE tool that connects your entire product development process in a single cloud-based platform that works on both Mac and PC . It quickly iterates on design ideas with sculpting tools to explore form and modeling tools to create finishing features. Fusion 360 combines industrial and mechanical design, simulation, collaboration, and machining in an integrated concept-to-production toolset.</p>
    <h1>Solid Modelling Software Tool</h1>
    <h5>SketchUp</h5>
    <p>SketchUp, formerly Google Sketchup, is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film and video game design. It is available as a freeware version, SketchUp Make, and a paid version with additional functionality, SketchUp Pro . SketchUp is owned by Trimble Inc., which is a mapping, surveying and navigation equipment company. There is an online library of free model assemblies (e.g. windows, doors, automobiles), 3D Warehouse, to which users may contribute models. The program includes drawing layout functionality, allows surface rendering in variable "styles", supports third-party "plug-in" programs hosted on a site called Extension Warehouse to provide other capabilities (e.g. near photo-realistic rendering) and enables placement of its models within Google Earth.</p>
    <h5>Solidworks</h5>
    <p>SolidWorks is a solid modeling and analysis program that runs on Microsoft Windows. This software tool is published by Dassault Systèmes . According to the publisher, over two million engineers and designers at more than 165,000 companies were using SolidWorks as of 2013. Also, according to the company, fiscal year 2011–12 revenue for SolidWorks totaled $483 million. SolidWorks offers complete 3D software tools that let anybody create, simulate, publish, and manage several types of data and information. Its products are easy to learn and use, and work together to help anybody design products better, faster, and more cost-effectively. SolidWorks focus on ease-of-use allows more engineers, designers, and other technology professionals than ever before to take advantage of 3D in bringing their designs to life.</p>
    <h1>Reverse Engineering Software tools</h1>
    <h5>Qlone</h5>
    <p>This photogrammetry software application serves as a free scanning tool for STEM educators’ needs. Its success has been proven by a number of designers and fabricators. Scanning is super-fast and done in real-time on your device, there is no waiting time. Scanning is quite easy with Qlone, you just need to place your object in the middle of the mat and Qlone’s AR dome will guide the user through the scanning process. The user can re-texture from Qlone’s selected pose. The user can even merge two different poses of the same object to have a better overall result. Anybody can export models in a variety of formats for use in other 3D tools and projects – OBJ, STL, PLY, X3D. Then, you can also share your models with friends through Facebook, Twitter, Instagram, WhatsApp, Line, Email and SMS. Attached is a Qlone tutorial prepared for Project MANEUVER participants.</p>
    <h5>Lithopane Experience with 3DP ROCKS</h5>
    <p>A lithophane is an etched or molded artwork in very thin translucent porcelain that can only be seen clearly when back lit with a light source. A lithophane presents a three-dimensional image - completely different from two-dimensional engravings and daguerreotypes that are "flat". The images change characteristics depending on the light source behind them. Window lithophane panel scenes change throughout the day depending upon the amount of sunlight. The varying lightsource is what makes lithophanes more interesting to the viewer than two-dimensional pictures . Project MANEUVER team has developed a tutorial to present the functionality of Lithopane to project’s STEM educators and industrial users. For this tutorial, 3DP ROCKS website was used . This is a freely available, open access application. Any kind of picture can be merged on any solid object. Finally, the newly made solid model could be produced via any additive manufacturing technology.</p>`,
  },
};

export const moocVideosLinks = {
  "video-contents": {
    title: "Mooc Video Contents",
    url: "/mooc-videos",
    image: smartManufacturing,
    content: `MOOC (Massive Open Online Course) an online interactive course for students to learn new skills outside a typical classroom setting by having more interaction and cooperation with other students in an open digital environment. The word MOOC refers to Massive Open Online Courses and it has now a popular tool used for online learning. MOOCs provide education to a multiple of people across the planet - usually without cost. Given that all MOOCs suffer from a rapid drop-off in numbers throughout the course, educators need to consider how to maintain the interest of the participants or students. Educators needs to be involved in a MOOC, in this way they understand what works and which platforms are appealing.

    MOOC video is a video tutorial that designed and created for massive open online course environment. What separates a MOOC video from a regular normal video seen on the web is how they are structured to interact with students. The classic example is to have the videos instruct on a clearly defined topic, and going through a process or explaining/condensing a particular lesson that is accompanied by a quiz to test the students' knowledge. But MOOC videos can do much more than this method to interact with students.

    MANEUVER project has created five MOOC video contents that provides a process of setting up local VR server, navigating inside 3D environemnt, interacting wit 3D objects, simulating CNC machines and different 3D printer models.`,
  },
  "setting-up-local-vr-server": {
    title: "Setting up local VR server",
    url: "/mooc-videos/setting-up-local-vr-server",
    content: `<video controls>
    <source src="/videos/video1_VRscenes.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video introduces how to set up a local server for descktop VR scene.</p>`,
  },
  "navigation-in-3d-world": {
    title: "Navigation in 3D world",
    url: "/mooc-videos/navigation-in-3d-world",
    content: `<video controls>
    <source src="/videos/video2_3Dworld.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video introduces how to navigate inside a virtual 3D world using Mouse and Keyboard Control.</p>`,
  },
  "interacting-with-3d-objs": {
    title: "Interacting with 3D Objects",
    url: "/mooc-videos/interacting-with-3d-objs",
    content: `<video controls>
    <source src="/videos/video3_Interactingwithobjects.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video introduces how to interact with 3D virtual objects in VR environment.</p>`,
  },
  "simulation-of-cnc-machine": {
    title: "Simulation of CNC Machine",
    url: "/mooc-videos/simulation-of-cnc-machine",
    content: `<video controls>
    <source src="/videos/video4_CNC.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video introduces how to interact with 3D virtual objects in VR environment.</p>`,
  },
  "simulation-of-3d-printers": {
    title: "Simulation of 3D Printers",
    url: "/mooc-videos/simulation-of-3d-printers",
    content: `<video controls>
    <source src="/videos/video5_PrintersWithCaptions.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a simulation of three types of 3D printer operation in VR environment.</p>`,
  },
  "simulation-of-fdm-technology": {
    title: "Simulation of FDM Technology",
    url: "/mooc-videos/simulation-of-fdm-technology",
    content: `<video controls>
    <source src="/videos/video_Summary_FDM.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a simulation of Fused Deposition Modeling Technology in 3D Printing.</p>`,
  },
  "simulation-of-binder-jetting": {
    title: "Simulation of Binder Jetting",
    url: "/mooc-videos/simulation-of-binder-jetting",
    content: `<video controls>
    <source src="/videos/binder_Jetting_Animation.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a simulation of Binder Jetting 3D Printing Technology.</p>`,
  },
  "setting-up-dell-visor-headset": {
    title: "Setting Up Dell Visor Headset",
    url: "/mooc-videos/setting-up-dell-visor-headset",
    content: `<video controls>
    <source src="/videos/dellVisor_Setup.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of setting up Dell Visor VR headset in Windows 10 OS.</p>`,
  },
  "windows-os-requirements": {
    title: "Windows OS Requirements",
    url: "/mooc-videos/windows-os-requirements",
    content: `<video controls>
    <source src="/videos/windowsUpdate_Mooc.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of updating Windows 10 OS for Windows Mixed Reality Headsets.</p>`,
  },
  "how-to-install-unity": {
    title: "How to install Unity",
    url: "/mooc-videos/how-to-install-unity",
    content: `<video controls>
    <source src="/videos/unityInstallation_MOOC.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of installing Unity game engine for VR development.</p>`,
  },
  "visual-studio-installation": {
    title: "Visual Studio Installation",
    url: "/mooc-videos/visual-studio-installation",
    content: `<video controls>
    <source src="/videos/visual_Studio_Setup.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of installing Visual Studio for Unity script editing.</p>`,
  },
  "steam-and-steamvr-setup": {
    title: "Steam and SteamVR Setup",
    url: "/mooc-videos/steam-and-steamvr-setup",
    content: `<video controls>
    <source src="/videos/steam_Setup_Mooc.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of installing Steam and SteamVR.</p>`,
  },
  "vr-unity-scene": {
    title: "VR Unity Scene",
    url: "/mooc-videos/vr-unity-scene",
    content: `<video controls>
    <source src="/videos/unity_Mooc.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of creating VR scenes in Unity.</p>`,
  },
  "scene-creation-process": {
    title: "Scene Creation Process",
    url: "/mooc-videos/scene-creation-process",
    content: `<video controls>
    <source src="/videos/3dModel_Scene_Creation.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of scene creation process in Unity.</p>`,
  },
  "creating-the-simulation": {
    title: "Creating the Simulation",
    url: "/mooc-videos/creating-the-simulation",
    content: `<video controls>
    <source src="/videos/dellVisor_Setup.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video provides a tutorial of creating VR simulation in Unity.</p>`,
  },
  "virtual-assembly-parts-process-simulation": {
    title: "Virtual Assembly Parts Process Simulation",
    url: "/mooc-videos/virtual-assembly-parts-process-simulation",
    content: `<video controls>
    <source src="/videos/virtualAssembly_Process_Parts.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video shows how the Planetary Gear operates and the role of each part. It also provides an animation of Planetary Gear parts.</p>`,
  },
  "virtual-gear-assembly-simulation": {
    title: "Virtual Gear Assembly Simulation",
    url: "/mooc-videos/virtual-gear-assembly-simulation",
    content: `<video controls>
    <source src="/videos/VirtualAssembly_GearSimulation.mp4" type="video/mp4" alt="Your browser does not support the video tag.">
  </video><p>This MOOC video shows the Planetary Gear assembly simulation and Desktop VR Unity demo for the MANEUVER project.</p>`,
  },
};

export const moocCornerItems1 = [
  {
    sourceType: "video",
    imageSource: navigationIn3dWorld,
    videoSource: "/videos/video2_3Dworld.mp4",
  },
  {
    sourceType: "video",
    imageSource: interactingWith3dObjs,
    videoSource: "/videos/video3_Interactingwithobjects.mp4",
  },
  {
    sourceType: "video",
    imageSource: simulationOfCncMachine,
    videoSource: "/videos/video4_CNC.mp4",
  },
  {
    sourceType: "video",
    imageSource: simulationOf3dPrinters,
    videoSource: "/videos/video5_PrintersWithCaptions.mp4",
  },
  {
    sourceType: "video",
    imageSource: simulationOfFdmTechnology,
    videoSource: "/videos/video_Summary_FDM.mp4",
  },
  {
    sourceType: "video",
    imageSource: simulationOfBinderJetting,
    videoSource: "/videos/binderjetting_demo1.mp4",
  },
];

export const moocCornerItems2 = [
  {
    sourceType: "video",
    imageSource: settingUpDellVisor,
    videoSource: "/videos/dellVisor_Setup.mp4",
  },
  {
    sourceType: "video",
    imageSource: windowsOsRequirements,
    videoSource: "/videos/windowsUpdate_Mooc.mp4",
  },
  {
    sourceType: "video",
    imageSource: howToInstallUnity,
    videoSource: "/videos/unityInstallation_MOOC.mp4",
  },
  {
    sourceType: "video",
    imageSource: visualStudioInstallation,
    videoSource: "/videos/visual_Studio_Setup.mp4",
  },
  {
    sourceType: "video",
    imageSource: steamAndSteamVr,
    videoSource: "/videos/steam_Setup_Mooc.mp4",
  },
  {
    sourceType: "video",
    imageSource: vrUnityScene,
    videoSource: "/videos/unity_Mooc.mp4",
  },
];

export const XRImages = [
  {
    title: "VR",
    image: spextraVR,
  },
  {
    title: "AR",
    image: spextraAR,
  },
  {
    title: "MR",
    image: spextraMR,
  },
  {
    title: "Desktop VR",
    image: spextradVR,
  },
];

export const acknowledgement = {
  contact: [
    {
      type: "html",
      data: `<a
    href="https://skfb.ly/oyDUw"
    title="flexibility icons"
  >
  Stylized planet by cmzw on Sketchfab
  </a>`,
    },
  ],
};
