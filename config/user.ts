export interface User {
  name: string
  profession: string;
  age: number;
  cel: string;
  stack: string[];
  languages: string[];
  about: string;
  moreAbout: string;
  aboutWork: string;
  aboutArch: string;
  imageUrl: string;
  curriculum: string;
}

const ageCalc = (date: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const birthMonth = date.getMonth();
  const actualMonth = today.getMonth();

  if (actualMonth < birthMonth || (actualMonth === birthMonth && today.getDate() < date.getDate())) {
    age--;
  }

  return age;
};

const birthDate = new Date(2003, 11, 21);
const userAge = ageCalc(birthDate);

const userProps: User =
{
  name: 'Abdilaahi Mowliid Dhaqane',
  profession: 'Mobile App Developer And Fullstack Developer',
  age: userAge,
  cel: '(255)61- 7869750',
  stack: ['flutter', 'dart', 'Javascript', 'Typescript', 'React', 'Nextjs', 'Nodejs', 'Expressjs', 'MySQL', 'MongoDB'],
  languages: ['English', 'Somali'],
  about: `Hello! I'm Abdilaahi Mowliid Dhaqane, a ${userAge}-year-old programming enthusiast, passionate about creating digital solutions and exploring the endless possibilities of the technology world. Over the past Four years, I've delved deep into the programming universe, focusing my efforts on the Mobile App development area, which allows me to master both front-end and back-end development of web applications.`,
  moreAbout: `Hello! I'm Abdilaahi Mowliid Dhaqane, a ${userAge}-year-old developer, passionate about creating digital solutions and exploring the endless possibilities of the technology world. Over the past Four years, I've delved deep into the programming universe, focusing my efforts on the Mobile App development area, which allows me to master both front-end and back-end development of web applications.\nIn addition to technical skills, I am a professional committed to delivering high-quality results. I have a detail-oriented approach to development, always seeking to improve the usability and performance of the applications I build.\nI am currently looking for new challenges and opportunities to apply my knowledge and passion for Fullstack development.\nMy goal is to contribute to the growth and success of the projects I am involved in, always with ethics, responsibility, and respect for the work team.`,
  aboutWork: '',
  aboutArch: 'The operating system I use the most is Linux, a platform I recently started exploring and am completely fascinated by everything related to it. By the way, I use Arch Linux, a system that focuses mainly on terminal use, allowing me to have full control of the system just through it. I have made some customizations to my system, including the Hyprland graphical environment, which is based on Wayland and Portals. This environment offers me the ability to make incredible customizations and have full control over all aspects of my system. I am very excited to share more about this experience that has captivated me so much.\nIn the context of development, I use Arch Linux and the Hyprland graphical environment for web development. An essential tool in this process is Neovim, a highly configurable text editor that assists me in web development, providing advanced editing and customization features. With this combination, I have an efficient work environment tailored to my needs as a developer. I am very excited to share more about this experience that has captivated me so much.',
  imageUrl: 'https://avatars.githubusercontent.com/u/140917187?v=4',
  curriculum: 'https://drive.google.com/file/d/18hcNdNSHwiQO6KUnBdv40D2g5co_U9ai/view?usp=sharing',
}

export default userProps;
