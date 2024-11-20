export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id : 3,
    name : 'Skills',
    href : "#skills",
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'SyncScript - Realtime Collaborative Code Editor',
    desc: 'SyncScript is a real-time collaborative code editor designed to enhance coding collaboration and customization. It allows users to compile code in multiple languages directly within the editor, adjust font sizes dynamically, switch between different programming languages, and customize themes for a personalized experience. The platform ensures seamless communication between users through real-time updates, enabling efficient collaboration in coding projects.',
    subdesc:
      'Built using React, Material UI, Node.js, Express.js, and Socket.IO, SyncScript is designed for seamless collaboration and efficient real-time communication.',
    href: 'https://syncscript-realtime-code-editor.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'Socket.io',
        path: '/assets/socket-io.svg',
      },
      {
        id: 4,
        name: 'Material UI',
        path: '/assets/material-ui.svg',
      },
      {
        id: 5,
        name: 'Express.js',
        path: '/assets/express.svg',
      },
    ],
  },
  {
    title: 'MeteoMate - A Weather Application',
    desc: 'MeteoMate is an interactive weather application that delivers real-time, accurate forecasts for thousands of cities. It features a visually appealing, user-friendly interface designed for accessibility and responsiveness, providing users with a seamless and personalized weather experience.',
    subdesc:
      'With MeteoMate, users enjoy real-time weather updates for thousands of cities, delivered seamlessly through a robust integration of React and Material-UI, leveraging cutting-edge API technology to ensure accuracy and smooth performance.',
    href: 'https://github.com/KritarthVerma',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'Material UI',
        path: '/assets/material-ui.svg',
      },
    ],
  },
  {
    title: 'Rock Vs Mine Prediction',
    desc: 'It is a machine learning model designed to classify sonar signals as either rocks or mines. The project involved preprocessing and analyzing the sonar dataset, applying feature engineering techniques to optimize the model, and achieving an impressive accuracy of 90.4%.',
    subdesc:
      'With a focus on accuracy, the model leverages Logistic Regression for classification, supported by data preprocessing and feature engineering using Pandas and NumPy to ensure optimal performance.',
    href: 'https://github.com/KritarthVerma',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Pandas',
        path: '/assets/pandas.svg',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/numpy.svg',
      },
    ],
  },
  {
    title: 'Simon Says Game',
    desc: "This game is an interactive 'Simon Says' where players test their memory by following a sequence of flashes and sounds that increase in complexity as the game progresses. It features a dynamic user interface and tracks the player's score based on their accuracy. The game generates random sequences, handles user inputs in real time, and provides instant feedback to keep the experience engaging and smooth.",
    subdesc:
      'Built with HTML5, CSS3, and JavaScript, this interactive "Simon Says" game ensures a seamless and engaging user experience, combining visually appealing design with robust game logic and real-time interaction handling.',
    href: 'https://kritarthverma.github.io/Simon_Says_Game/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML5',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS3',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/html.svg",
  },
  {
    name : "CSS 3",
    icon : "/assets/css.svg",
  },
  {
    name: "JavaScript",
    icon: "/assets/javascript.svg",
  },
  {
    name: "C++",
    icon: "/assets/c++.svg",
  },
  {
    name: "Java",
    icon: "/assets/java.svg",
  },
  {
    name: "Python",
    icon: "/assets/python.svg",
  },
  {
    name: "React",
    icon: "/assets/react.svg",
  },
  {
    name: "Node.js",
    icon: "/assets/nodejs.svg",
  },
  {
    name: "Express.js",
    icon: "/assets/expressjs.svg",
  },
  {
    name: "TailWind CSS",
    icon: "/assets/tailwindcss.png",
  },
  {
    name: "Git",
    icon: "/assets/git.svg",
  },
  {
    name: "Bootstrap",
    icon: "/assets/bootstrap.svg",
  },
  {
    name: "Material UI",
    icon: "/assets/material-ui.svg",
  },
  {
    name: "MongoDB",
    icon: "/assets/mongodb.svg",
  },
  {
    name: "MySQL",
    icon: "/assets/mysql.svg",
  },
]