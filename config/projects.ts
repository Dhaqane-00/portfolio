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
    ],
    link: '/production',
    source: 'https://github.com/Dhaqane-00/E-Learning_Backend.git',
    img: '/img/E-learning.jpg',
    direction: 'left',
  },
  // {
  //   name: 'fsw-barbershop',
  //   description: 'Aplicação feita com o propósito de servir como um aplicativo para barbearias, as quais podem se cadastrar, mostrar seus serviços, valores e realizar agendamentos.',
  //   stacks: [
  //     'Javascript',
  //     'Typescript',
  //     'NextJs',
  //     'Tailwind',
  //     'Prisma',
  //     'PostgreeSQL',
  //     'Supabase',
  //     'OAuth'
  //   ],
  //   link: 'https://fsw-babershop.vercel.app/',
  //   source: 'https://github.com/Guilherme-RNovaes/fsw-babershop',
  //   img: '/img/fsw_barber.png',
  //   direction: 'right',
  // },
  // {
  //   name: 'netflix-clone',
  //   description: "Clone da tela inicial da Netflex feito em React de forma a aplicar tudo que estudei inicialmente em React e meu primeiro consumo de API's com a API TMDB.",
  //   stacks: [
  //     'Javascript',
  //     'React',
  //     'Html',
  //     'Css',
  //     'TMDB API'
  //   ],
  //   link: 'https://guilherme-rnovaes.github.io/netflix-react-clone/',
  //   source: 'https://github.com/Guilherme-RNovaes/netflix-react-clone',
  //   img: '/img/netflix_clone.png',
  //   direction: 'left',
  // },
  // {
  //   name: 'google-keep-clone',
  //   description: 'Clone básico do famoso "google Keep" onde foram implementadas as funcionalidades de adicionar e excluir tarefas com título e descrição.',
  //   stacks: [
  //     'Javascript',
  //     'React',
  //     'Html',
  //     'Css'
  //   ],
  //   link: 'https://google-keep-clone-blond.vercel.app/',
  //   source: 'https://github.com/Guilherme-RNovaes/google-keep-clone',
  //   img: '/img/google_keep_clone.png',
  //   direction: 'right',
  // },
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
