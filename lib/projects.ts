export interface Project {
  id: string;
  title: string;
  sub: string;
  desc: string;
  img: string;
  span: string; // for the masonry grid
  gallery: string[];
}

export const projectsData: Project[] = [
  { 
    id: 'imm-cologne-2024',
    title: 'Sajam namještaja “imm” Cologne 2024', 
    sub: 'Paviljon BiH, ukupne kvadrature 209 m2', 
    desc: 'Ovaj projekat obuhvatao je kompletan inženjering, dizajn i izradu paviljona Bosne i Hercegovine na prestižnom sajmu namještaja u Kelnu. Fokus je bio na isticanju vrhunskog kvaliteta domaćih proizvođača, uz optimizaciju izložbenog prostora za maksimalnu prohodnost i vizuelnu privlačnost.',
    img: 'https://picsum.photos/seed/expo1/1920/1080', 
    span: 'col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/9]',
    gallery: [
      'https://picsum.photos/seed/imm1/1200/800',
      'https://picsum.photos/seed/imm2/1200/800',
      'https://picsum.photos/seed/imm3/1200/800',
      'https://picsum.photos/seed/imm4/1200/800',
    ]
  },
  { 
    id: 'aa-dusseldorf-2023',
    title: 'Sajam zaštite na radu “A+A” Düsseldorf 2023', 
    sub: 'Paviljon BiH, 74,18 m2', 
    desc: 'Dizajniran sa ciljem maksimiziranja funkcionalnosti na ograničenom prostoru. Štand je morao komunicirati sigurnost i zaštitu, pa smo koristili jake, stabilne forme u kombinaciji sa modernim materijalima i akcentnom rasvjetom.',
    img: 'https://picsum.photos/seed/expo2/800/1200', 
    span: 'col-span-1 aspect-[4/5]',
    gallery: [
      'https://picsum.photos/seed/aa1/1200/800',
      'https://picsum.photos/seed/aa2/1200/800',
    ]
  },
  { 
    id: 'productronica-munchen-2023',
    title: 'Sajam “PRODUCTRONICA” München 2023', 
    sub: 'Opremanje učešća i štanda za BiH', 
    desc: 'Tehnološki napredan sajam zahtijevao je i adekvatan pristup dizajnu štanda. Korištene su čiste linije, high-tech materijali i integrisani digitalni displeji kako bi se posjetiocima na najbolji način prezentovale inovacije iz BiH.',
    img: 'https://picsum.photos/seed/expo3/1920/1080', 
    span: 'col-span-1 md:col-span-3 lg:col-span-3 aspect-[21/9]',
    gallery: [
      'https://picsum.photos/seed/prod1/1200/800',
      'https://picsum.photos/seed/prod2/1200/800',
      'https://picsum.photos/seed/prod3/1200/800',
    ]
  },
  { 
    id: 'prowein-dusseldorf-2023',
    title: 'Sajam “PROWEIN” Düsseldorf 2023', 
    sub: 'Paviljon BiH izlagača', 
    desc: 'Elegancija i prefinjenost bili su ključni pojmovi prilikom kreiranja ovog paviljona namijenjenog proizvođačima vina. Topli tonovi drveta i diskretno osvjetljenje stvorili su ugodnu ambijentalnu atmosferu za degustaciju.',
    img: 'https://picsum.photos/seed/expo4/800/800', 
    span: 'col-span-1 aspect-square',
    gallery: [
      'https://picsum.photos/seed/wine1/1200/800',
      'https://picsum.photos/seed/wine2/1200/800',
    ]
  },
  { 
    id: 'anuga-cologne-2023',
    title: 'Sajam “ANUGA” FINE FOOD Cologne 2023', 
    sub: 'Paviljon BiH izlagača', 
    desc: 'Za sajam prehrambene industrije osmislili smo čist, higijenski i privlačan dizajn, koristeći bjelinu i drvo. Prostor je osigurao jasnu podjelu između različitih izlagača uz očuvanje zajedničkog vizuelnog identiteta Bosne i Hercegovine.',
    img: 'https://picsum.photos/seed/expo5/1920/1080', 
    span: 'col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/9]',
    gallery: [
      'https://picsum.photos/seed/food1/1200/800',
      'https://picsum.photos/seed/food2/1200/800',
      'https://picsum.photos/seed/food3/1200/800',
    ]
  },
  { 
    id: 'giga-wels-2022',
    title: 'Sajam namještaja “GIGA” Wels 2022', 
    sub: 'Opremanje sajma Austrija', 
    desc: 'Značajan projekat na austrijskom tržištu gdje smo uspješno projektovali i izveli seriju štandova, u skladu sa strogim lokalnim standardima o sigurnosti i ekološkoj prihvatljivosti materijala.',
    img: 'https://picsum.photos/seed/expo6/1920/1080', 
    span: 'col-span-1 md:col-span-3 aspect-[16/9]',
    gallery: [
      'https://picsum.photos/seed/giga1/1200/800',
      'https://picsum.photos/seed/giga2/1200/800',
      'https://picsum.photos/seed/giga3/1200/800',
    ]
  },
];
