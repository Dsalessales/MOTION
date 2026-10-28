// Troque `src` pelos arquivos da sua galeria (ex.: '/images/one.jpg' dentro de /public/images).
const photo = id => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=max`;

export const obras = [
  { src: photo('photo-1737071371043-761e02b1ef95'), alt: 'Escultura cromada e iridescente de uma cabeça', title: 'Iridescência', subtitle: 'Sala 01 · Escultura' },
  { src: photo('photo-1693645325828-62cd35c8da8f'), alt: 'Pessoa de roupa escura diante de um fundo branco', title: 'Sala Branca', subtitle: 'Sala 02 · Fotografia' },
  { src: photo('photo-1739056238917-d89cd05c48d5'), alt: 'Forma cromada retorcida sobre fundo preto', title: 'Metal Líquido', subtitle: 'Sala 01 · Escultura' },
  { src: photo('photo-1747191092806-c7da11881986'), alt: 'Busto de argila visto de perfil', title: 'Estudo em Argila', subtitle: 'Ateliê 04' },
  { src: photo('photo-1495462911434-be47104d70fa'), alt: 'Mulher com um chapéu preto de aba larga', title: 'Aba', subtitle: 'Sala 02 · Fotografia' },
  { src: photo('photo-1786835568925-20cd20007ed0'), alt: 'Três formas espirais em branco, dourado e prata sobre cinza', title: 'Três Formas', subtitle: 'Sala 03 · Instalação' },
  { src: photo('photo-1770249196550-ff6c641165cb'), alt: 'Escultura humanoide cromada', title: 'Autômato', subtitle: 'Sala 01 · Escultura' },
  { src: photo('photo-1787181875088-087d612262a7'), alt: 'Escultura preta texturizada com uma abertura no centro', title: 'Obsidiana', subtitle: 'Sala 03 · Instalação' },
  { src: photo('photo-1770062422885-2dfcbe8fb65b'), alt: 'Mulher de camisa branca agachada em um cenário escuro', title: 'Equilíbrio', subtitle: 'Sala 02 · Fotografia' },
  { src: photo('photo-1726910133626-9b573eca70ff'), alt: 'Formas curvas pretas empilhadas como um leque', title: 'Barbatanas', subtitle: 'Sala 03 · Instalação' },
  { src: photo('photo-1604854574958-59047362c165'), alt: 'Busto de gesso branco sobre uma mesa preta', title: 'Gesso', subtitle: 'Ateliê 04' }
];
