import svg1 from '../../images/svg_online_discussion.svg';
import svg2 from '../../images/event1.jpg';
import svg3 from '../../images/svg_aircraft.svg';
import svg4 from '../../images/svg_contact_us.svg';
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
  btnLabel: 'Quero fazer parte',
  btnLink:
    'https://gmail.us7.list-manage.com/subscribe?u=15c8a2eac045ad27e371caba3&id=d72a2d8a6a',
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
  btnLink:
    'https://gmail.us7.list-manage.com/subscribe?u=15c8a2eac045ad27e371caba3&id=d72a2d8a6a',
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
  // topLine: 'Entre em contacto',
  headLine: 'Apoie a comunidade',
  description: `Se tiver alguma sugestão, dúvida, crítica, doação ou quiser apoiar a comunidade
    de alguma forma, por favor entre em contacto connosco.
    Seu apoio valerá muito apena para o desenvolvimento de todos nós.  
  `,
  btnLabel: 'Entrar em contacto',
  btnLink:
    'https://us7.list-manage.com/contact-form?u=15c8a2eac045ad27e371caba3&form_id=e8500093c255d9b55df59f51d0db48fd',
  start: 'true',
  img: svg4,
  lottie: false,
  alt: 'Image',
};
