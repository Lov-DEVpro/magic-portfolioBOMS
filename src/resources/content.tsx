import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "BOMS-expo",
  lastName: "",
  name: `BOMS-expo`,
  role: "Sajamska industrija",
  avatar: "/images/boms_logo.png",
  email: "info@bomsexpo.com",
  location: "Bosna i Hercegovina",
  timeZone: "Europe/Sarajevo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bosnian", "English", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `BOMSEXPO`,
  description: `Portfolio website showcasing our work in the fair industry`,
  headline: <>Sajamski štandovi vrhunske kvalitete</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sajamska industrija</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Pouzdani partneri
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      BOMS-expo dizajnira i izrađuje vrhunske sajamske štandove. <br />
      Preko 28 godina iskustva, OCTANORM sistem i 100+ završenih projekata.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "O nama",
  title: `O nama - BOMSEXPO`,
  description: `Upoznajte ${person.name}, kompaniju za ${person.role} iz ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Uvod",
    description: (
      <>
        Ideja je samo misao sve dok se ne sprovede u djelo. Uz desetljeća iskustva i naš kompetentan tim, osiguravamo da svaka vaša zamisao dobije željeni oblik, nudeći vam potpuno transparentan proces saradnje.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Naši resursi i kapaciteti",
    experiences: [
      {
        company: "Vlastita proizvodnja",
        timeframe: "Preko 2 decenije iskustva",
        role: "Vlastiti magacin i radionica",
        achievements: [
          <>
            Posjedujemo vlastiti magacin i radionicu opremljenu za najzahtjevnije projekte.
          </>,
          <>
            Stručno radimo sa OCTANORM sistemom, što nam omogućava izradu svih vrsta štandova kombinirajući drvo, metal i plastiku.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Naš pristup",
        timeframe: "100+ završenih projekata",
        role: "Fokus na kvalitet",
        achievements: [
          <>
            Naša posvećenost kvaliteti ogleda se u preko 100 završenih projekata i stopi od 97% zadovoljnih kupaca.
          </>,
          <>
            Svakom projektu pristupamo individualno i profesionalno, garantujući Vam transparentnu saradnju.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Podrška klijentima",
    institutions: [
      {
        name: "Kompetentan tim",
        description: <>Naš kompetentan tim osigurava da svaka vaša zamisao dobije željeni oblik, od prve ideje do finalne realizacije.</>,
      },
      {
        name: "Uvijek na raspolaganju",
        description: <>Stojimo Vam na raspolaganju za sva pitanja i nejasnoće tokom cijelog procesa rada.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tehnologija i materijali",
    skills: [
      {
        title: "OCTANORM sistem",
        description: (
          <>Sistem koji nam omogućava izradu svih vrsta štandova kombinirajući drvo, metal i plastiku za vrhunske rezultate.</>
        ),
        tags: [
          {
            name: "OCTANORM",
            icon: "grid",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Neovisna infrastruktura",
        description: (
          <>Oslanjamo se na naš vlastiti magacin i radionicu, što garantuje kvalitetnu i pravovremenu izradu.</>
        ),
        tags: [
          {
            name: "Infrastruktura",
            icon: "home",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/portfolio",
  label: "Portfolio",
  title: "Portfolio i reference",
  description: `Pogledajte naše referentne projekte i sajamske nastupe - ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Usluge",
  title: `Naše usluge – ${person.name}`,
  description: `Saznajte više o uslugama koje nudi ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
