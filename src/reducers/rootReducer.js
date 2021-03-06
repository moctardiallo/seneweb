import ArticleImage from "../img/mane.jpg";
import PubliciteGif from "../img/publicite.gif";
import CetudImage from "../img/cetud.jpg";
import SeneFoot from "../img/senefoot.jpg";

const initState = {
  categories: [
    "Actualite",
    "Societe",
    "Sport",
    "Politique",
    "Photos",
    "Videos",
    "Blogs",
    "Faits-Divers",
    "People",
    "CONSULTEZ LES BLOGS"
  ],
  articles: [
    {
      id: 1,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "9h",
      reactions: {
        ncommentaires: 3
      }
    },
    {
      id: 2,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "14h",
      reactions: {
        ncommentaires: 4
      }
    },
    {
      id: 3,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: ArticleImage,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "22h",
      reactions: {
        ncommentaires: 5
      }
    },
    {
      id: 5,
      contenu: "",
      image: PubliciteGif,
      titre: "",
      topic: "",
      reactions: {
        ncommentaires: ""
      }
    },
    {
      id: 4,
      contenu: "",
      image: CetudImage,
      titre: "",
      topic: "",
      date: "",
      reactions: {
        ncommentaires: ""
      }
    },
    {
      id: 6,
      contenu:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sed veritatis aspernatur ",
      image: SeneFoot,
      titre: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      topic: "Sport",
      date: "22h",
      reactions: {
        ncommentaires: 5
      }
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
