import svg1 from '../../images/svg_online_discussion.svg';
import svg2 from '../../images/event1.jpg';
import svg3 from '../../images/svg_aircraft.svg';
import animationData from '../../lottie/confetti-partyyy_bal.json';
export const homeObj1 = {
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  primary: true,
  bgImage: true,
  imgStart: '',
  topLine: '',
  headLine: `ANGOJS... 
            O LUGAR CERTO PARA SUA EVOLUÇÃO`,
  description: `AngoJs é uma comunidade de desenvolvedores, 
  que por meio da realização de grandes e vários 
  eventos (presenciais e online), treinamentos e 
  orientação profissional, ajudará você como desenvolvedor, 
  a crescer, ganhar visibilidade, e evoluir de forma 
  exponencial nesta carreira.`,
  btnLabel: 'Get Started',
  start: '',
  img: svg1,
  lottie: false,
  alt: 'Image',
};

export const homeObj2 = {
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  primary: false,
  bgImage: false,
  imgStart: 'start',
  headLine: 'Abertura oficial da comunidade',
  topLine: 'AngoJs Community',
  description: `Neste evento, daremos abertura oficial à comunidade AngoJs, e 
    vamos bater um papo com os nossos convidados especiais, que nos irão explicar
    sobre a importância de participar em uma comunidade. 
`,
  btnLabel: 'Participar do Evento',
  btnLink: 'https://www.youtube.com/watch?v=tzzEXZEEKng',
  start: 'true',
  img: svg2,
  lottie: false,
  alt: 'Image',
};

export const homeObj3 = {
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  primary: true,
  bgImage: false,
  imgStart: '',
  topLine: 'AngoJs Community',
  headLine: 'Como posso participar activamente na comunidade?',
  description: `Para participar é muito simples. Você só precisa
  interagir sempre, partilhar seus conhecimentos e experiências 
  com outros membros da comunidade.
  `,
  btnLabel: 'Começar',
  start: '',
  img: svg3,
  lottie: true,
  animationData,
  alt: 'Image',
};

export const homeObj4 = {
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  primary: false,
  bgImage: false,
  imgStart: 'start',
  topLine: 'Marketing Agency',
  headLine: 'Lead Generation Specialist for Online Business',
  description: `We help business owners increase their revenu. 
    Our team of unique specialist can help you acheive you
    acheive your business goals.`,
  btnLabel: 'Get Started',
  start: 'true',
  img: require('../../images/svg-3.svg'),
  lottie: false,
  alt: 'Image',
};
