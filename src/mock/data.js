import { nanoid } from "nanoid"

// HEAD DATA
export const headData = {
  title: "Jeroen | Web Developer",
  lang: "en",
  description: "Welcome to my website",
}

// HERO DATA
export const heroData = {
  title: "Hi, my name is",
  name: "Jeroen",
  subtitle: "I'm a web developer.",
  cta: "Get to know me better",
}

// ABOUT DATA
export const aboutData = {
  img: "me.jpg",
  paragraphOne: "At the age of ten I wanted to become a pro soccer player.",
  paragraphTwo: "At the age of twenty I wanted to become a famous drummer.",
  paragraphThree: "At the age of thirty I wanted to become a Chef de Cuisine.",
  paragraphFour: "And at the age of fourty I wanted to become a web developer.",
  paragraphFive:
    "So now I'm a web developer focused on React with Redux for front-end development and Node.js with Express for back-end development. I'm currently exploring Microservices with Docker and Kubernetes. And sharpening my HTML5, CSS3 and Javascript skills every day. There's never a dull moment in web development.",
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "fairfeebnb.png",
    title: "FairFeeBnb",
    info: "React Redux Node.js Express MongoDB",
    info2:
      "Prototype for a webproject like AirBnb. All users can see all rentals. Only logged in users can upload a rental or book a rental. Feel free to login and explore all features. Loading of page can be slow. Has to do with deployment on Heroku. Once it's loaded it works like  a charm.",
    url: "https://fairfeebnb.herokuapp.com/",
    repo: "https://github.com/jeroen-dev/fairfeebnb",
  },
  {
    id: nanoid(),
    img: "wineshop.png",
    title: "The WineShop",
    info: "React Context Strapi",
    info2:
      "Webproject I made to discover possibilities of context API in React. There's also a nice filter feature. Log in and play around. Loading of page can be slow. Has to do with deployment on Heroku. Once it's loaded it works like  a charm.",
    url: "https://react-ecommerce-context.netlify.app/",
    repo: "https://github.com/jeroen-dev/react-ecommerce-context",
  },
  {
    id: nanoid(),
    img: "sneakers.png",
    title: "SneakOut",
    info: "React Redux Node.js Express MongoDB ",
    info2:
      "Bigger ecommerce project. Admin users can upload new sneakers to the webshop. Logged in users can shop, comment and rank products. Work in progress. Loading of page can be slow. Has to do with deployment on Heroku. Once it's loaded it works like  a charm.",
    url: "https://ecommerce-sneakout.herokuapp.com/",
    repo: "https://github.com/jeroen-dev/ecommerce-sneakout",
  },
]

// CONTACT DATA
export const contactData = {
  cta: "Do you like what you see?",
  btn: "Get in touch",
  email: "",
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url:
        "https://www.linkedin.com/public-profile/in/jeroen-theunissen-developer",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/jeroen-dev",
    },
  ],
}
