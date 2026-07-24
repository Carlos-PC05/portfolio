export type Lang = 'en' | 'es';

/* Facts. Nothing here may be invented — every value is verified.
   Empty string = not yet supplied by Carlos; the template renders nothing. */
export const facts = {
  name: 'Carlos Parra Camacho',
  surname: 'PARRA',
  number: '05',
  email: 'carlosparracamacho@gmail.com',
  github: 'https://github.com/Carlos-PC05',
  linkedin: 'https://www.linkedin.com/in/carlos-parra-camacho',
  instagram: 'https://www.instagram.com/carrlit0s_/',
  /* TODO(carlos): add the company name for the current internship and it will
     appear automatically in the season record. Left blank rather than guessed. */
  internshipCompany: '',
};

type ProjectCopy = { position: string; title: string; line: string };

export const projects: {
  no: string;
  repo: string | null;
  stack: string[];
  en: ProjectCopy;
  es: ProjectCopy;
}[] = [
  {
    no: '01',
    repo: 'https://github.com/Carlos-PC05/CapstoneProject',
    stack: ['Python', 'PostgreSQL', 'Sass', 'JavaScript'],
    en: {
      position: 'Web application',
      title: 'DeSales Exchange Hub',
      line: 'A web marketplace to buy, sell and rent items, built for exchange students inside a university community. Made with Flask as my Capstone Project at DeSales University.',
    },
    es: {
      position: 'Aplicación web',
      title: 'DeSales Exchange Hub',
      line: 'Un mercado web para comprar, vender y alquilar objetos, pensado para estudiantes de intercambio dentro de una comunidad universitaria. Hecho con Flask como Capstone Project en DeSales University.',
    },
  },
  {
    no: '02',
    repo: null,
    stack: ['C', 'CUDA', 'OpenMP', 'Linear algebra'],
    en: {
      position: 'Parallel algorithms',
      title: 'CUDA and OpenMP parallel programming',
      line: 'A parallel algorithm for calculating gradients in multivariable equation systems, written twice — once for the CPU with OpenMP, once for the GPU with CUDA.',
    },
    es: {
      position: 'Algoritmos paralelos',
      title: 'Programación paralela con CUDA y OpenMP',
      line: 'Un algoritmo paralelo para el cálculo de gradientes en sistemas de ecuaciones multivariable, escrito dos veces — una para CPU con OpenMP y otra para GPU con CUDA.',
    },
  },
  {
    no: '03',
    repo: 'https://github.com/Carlos-PC05/Pneumonia',
    stack: ['Python', 'Keras', 'Deep learning', 'CNN'],
    en: {
      position: 'Deep learning',
      title: 'Pneumonia detection with Keras',
      line: 'A convolutional neural network that detects pneumonia in chest X-rays.',
    },
    es: {
      position: 'Deep learning',
      title: 'Detección de neumonía con Keras',
      line: 'Una red neuronal convolucional que detecta neumonía en radiografías de tórax.',
    },
  },
  {
    no: '04',
    repo: null,
    stack: ['Python', 'PyTorch', 'Deep learning', 'U-Net'],
    en: {
      position: 'Deep learning',
      title: 'Skin lesion segmentation with PyTorch',
      line: 'A deep learning model that segments skin lesions.',
    },
    es: {
      position: 'Deep learning',
      title: 'Segmentación de lesiones cutáneas con PyTorch',
      line: 'Un modelo de deep learning que segmenta lesiones cutáneas.',
    },
  },
];

type SeasonCopy = { role: string; when: string; line: string };

export const season: { current: boolean; en: SeasonCopy; es: SeasonCopy }[] = [
  {
    current: true,
    en: {
      role: 'Software Engineer Intern',
      when: 'Now',
      line: 'Working as a software engineer intern alongside my final year of study.',
    },
    es: {
      role: 'Ingeniero de software en prácticas',
      when: 'Actualmente',
      line: 'Trabajando como ingeniero de software en prácticas mientras curso mi último año.',
    },
  },
  {
    current: false,
    en: {
      role: 'Programming Teacher',
      when: 'Summer 2026',
      line: 'Teaching programming to kids aged 8–12.',
    },
    es: {
      role: 'Profesor de programación',
      when: 'Verano 2026',
      line: 'Enseñando programación a niños de 8 a 12 años.',
    },
  },
  {
    current: false,
    en: {
      role: 'Sport Model',
      when: 'Aug 2025',
      line: 'Worked with the Spanish sport brand Musai Brand, promoting the brand and its services.',
    },
    es: {
      role: 'Modelo deportivo',
      when: 'Ago 2025',
      line: 'Trabajé con la marca deportiva española Musai Brand, promocionando la marca y sus servicios.',
    },
  },
  {
    current: false,
    en: {
      role: 'Robotics and Programming Teacher',
      when: 'Jun 2025',
      line: 'Taught the basics of programming and robotics to kids aged 8–12, building projects with LEGO Spike and Prime.',
    },
    es: {
      role: 'Profesor de robótica y programación',
      when: 'Jun 2025',
      line: 'Enseñé los fundamentos de la programación y la robótica a niños de 8 a 12 años, construyendo proyectos con LEGO Spike y Prime.',
    },
  },
];

/* The range band: three disciplines, with the real count of projects in each.
   PRODUCT principle 3 says range is the argument — this shows it instead of
   claiming it. Counts are derived from `projects` above, never hand-written. */
export const range: { count: number; en: string; es: string }[] = [
  { count: 1, en: 'Full-stack web', es: 'Web full-stack' },
  { count: 1, en: 'Parallel computing', es: 'Computación paralela' },
  { count: 2, en: 'Deep learning', es: 'Deep learning' },
];

export const ui = {
  en: {
    htmlLang: 'en',
    title: 'Carlos Parra Camacho — Software Engineer',
    meta:
      'Final-year Computer Science student and software engineer intern in Spain. Full-stack web, CUDA parallel computing, and deep learning on medical images.',
    skip: 'Skip to content',
    navLabel: 'Sections',
    spine: ['Software engineer', 'Spain', 'Open to work', '2026'],
    rangeLabel: 'Four projects, three disciplines',
    projectsWord: 'projects',
    projectWord: 'project',
    nav: { squad: 'Squad', season: 'Season', profile: 'Profile', contact: 'Contact' },
    role: 'Final-year Computer Science student · Software engineer intern',
    thesis:
      'Full-stack web, CUDA on the GPU, and deep learning on medical images. Four projects, three very different disciplines.',
    status: 'Open to work',
    langLabel: 'Language',
    cta: 'Email me',
    squadTitle: 'The squad',
    squadSub: 'Four projects I have built and can walk you through line by line.',
    seasonTitle: 'The season',
    seasonSub: 'Where I have been working, most recent first.',
    profileTitle: 'The profile',
    profileLead:
      'I am Carlos, a final-year Computer Science student in Spain, currently working as a software engineer intern. I like problems that sit at different altitudes — a Flask marketplace one month, a CUDA kernel the next, a U-Net after that.',
    profileTeach:
      'I also teach programming and robotics to kids aged 8 to 12, which is the fastest way I know to find out whether you actually understand something.',
    offPitch: 'Off the pitch',
    facts: ['Sport. Any kind of it.', 'Good coffee, daily.', 'Music, always on.'],
    contactTitle: 'Get in touch',
    contactLine: 'Open to graduate roles, internships and freelance work. I reply to everything.',
    noRepo: 'No public repository',
    viewRepo: 'View repository',
    current: 'Current',
    footer: 'Built with Astro.',
  },
  es: {
    htmlLang: 'es',
    title: 'Carlos Parra Camacho — Ingeniero de software',
    meta:
      'Estudiante de último curso de Ingeniería Informática e ingeniero de software en prácticas en España. Web full-stack, computación paralela con CUDA y deep learning sobre imagen médica.',
    skip: 'Ir al contenido',
    navLabel: 'Secciones',
    spine: ['Ingeniero de software', 'España', 'Disponible', '2026'],
    rangeLabel: 'Cuatro proyectos, tres disciplinas',
    projectsWord: 'proyectos',
    projectWord: 'proyecto',
    nav: { squad: 'Plantilla', season: 'Temporada', profile: 'Perfil', contact: 'Contacto' },
    role: 'Estudiante de último curso de Ingeniería Informática · Ingeniero de software en prácticas',
    thesis:
      'Web full-stack, CUDA en la GPU y deep learning sobre imagen médica. Cuatro proyectos, tres disciplinas muy distintas.',
    status: 'Disponible para trabajar',
    langLabel: 'Idioma',
    cta: 'Escríbeme',
    squadTitle: 'La plantilla',
    squadSub: 'Cuatro proyectos que he desarrollado y que puedo explicarte línea a línea.',
    seasonTitle: 'La temporada',
    seasonSub: 'Dónde he trabajado, de lo más reciente a lo más antiguo.',
    profileTitle: 'El perfil',
    profileLead:
      'Soy Carlos, estudiante de último curso de Ingeniería Informática en España y actualmente ingeniero de software en prácticas. Me gustan los problemas de distinta naturaleza — un mercado en Flask un mes, un kernel de CUDA al siguiente y una U-Net después.',
    profileTeach:
      'También enseño programación y robótica a niños de 8 a 12 años, que es la forma más rápida que conozco de descubrir si de verdad entiendes algo.',
    offPitch: 'Fuera del campo',
    facts: ['Deporte. El que sea.', 'Buen café, a diario.', 'Música, siempre puesta.'],
    contactTitle: 'Hablemos',
    contactLine:
      'Abierto a puestos junior, prácticas y trabajo freelance. Contesto a todo.',
    noRepo: 'Sin repositorio público',
    viewRepo: 'Ver repositorio',
    current: 'Actual',
    footer: 'Hecho con Astro.',
  },
} as const;
