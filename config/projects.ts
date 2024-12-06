export interface project {
  name: string;
  description: string;
  stacks: string[];
  link: string;
  source: string;
  img: string;
  direction: string;
}

export const projectProps: project[] = [
  {
    name: 'Evc-Plus service',
    description: 'Evc-Plus service is a mobile application that allows users to send and receive money, as well as make payments and transfers.',
    stacks: [
      'Javascript',
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/Evc-Plus.git',
    img: '/img/Evc-plus.jpg',
    direction: 'left',
  },
  {
    name: 'Wing-Vpn',
    description: 'Wing-Vpn is a mobile application that allows users to connect to a VPN server and access the internet securely.',
    stacks: [
      'Flutter',
      'Dart',
      'Vpn',
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/vpn_wing_Flutter.git',
    img: '/img/Wing_Thumbnail.jpg',
    direction: 'right',
  },
  {
    name: 'E-learning Managment System Api',
    description: 'A robust and scalable Learning Management System (LMS) backend built with Node.js, Express, and MongoDB. This API provides comprehensive features for course management, user authentication, content delivery, and learning progress tracking.',
    stacks: [
      'Javascript',
      'NodeJs',
      'Express',
      'Payment',
      'MongoDB',

    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/E-Learning_Backend.git',
    img: '/img/E-learning.jpg',
    direction: 'left',
  },
  {
    name: 'YAGLEEL ICT',
    description: 'A modern, high-performance landing page built with Next.js 15.0.3, TypeScript, Tailwind CSS. Shadcn With Aceternity',
    stacks: [
      'TypeScript',
      'Next js 15',
      'Tailwind Css',
      'Shadcn',
      'aceternity',
      'Turbopack'
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/ict-landing.git',
    img: '/img/Yagleel.png',
    direction: 'right',
  },
  {
    name: 'Flutter E-commerce App',
    description: 'A modern, feature-rich e-commerce mobile application built with Flutter.',
    stacks: [
      'Flutter',
      'Dart',
      'NodeJs',
      'Firebase',
      'Express',
      'MongoDB',
      'Evc-Plus',
      'Swagger Doc Ui', 
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/Flutter-E-commerce.git',
    img: '',
    direction: 'right',
  },
  {
    name: 'Student Graduation',
    description: "A modern web application built with React, TypeScript, and Material-UI that helps analyze and predict student graduation outcomes.",
    stacks: [
      'React',
      'TypeScript',
      'Material-UI',
      'NodeJs',
      'Express',
      'MongoDB',
      'Redux Toolkit',
      'ECharts',
      'React Router v6',
      'Vite',
      'RTK Query',
      'XLSX', 
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/Student-Graduation-React.git',
    img: '/img/Student-Graduation.jpg',
    direction: 'left',
  },
  // {
  //   name: 'pearson-hardman',
  //   description: "Modelo de landing page para advocacias voltado para divulgação e captação de clientes inspirado no seriado 'suits'.",
  //   stacks: [
  //     'Javascript',
  //     'Html',
  //     'Css'
  //   ],
  //   link: 'https://pearson-hardman-one.vercel.app/',
  //   source: 'https://github.com/Guilherme-RNovaes/pearson-hardman',
  //   img: '/img/pearson_hardman.png',
  //   direction: 'left',
  // },
  // {
  //   name: 'meu-primeiro-portfolio',
  //   description: "Este foi meu primeiro portfolio o qual utilizeu por muito tempo, resolvi deixa-lo aqui pois quando o criei tinha acabado de aprender sobre React e este foi meu primeiro desafio a mim mesmo.",
  //   stacks: [
  //     'Javascript',
  //     'React',
  //     'Html',
  //     'Css'
  //   ],
  //   link: 'https://gnovaes-portfolio-old.vercel.app/',
  //   source: 'https://github.com/Guilherme-RNovaes/Portfolio',
  //   img: '/img/first_portfolio.png',
  //   direction: 'right',
  // },
]
