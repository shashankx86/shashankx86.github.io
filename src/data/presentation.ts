type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "shashankspis20@gmail.com",
  title: "Hi, I’m shashankx86 👋",
  profile: "https://avatars.githubusercontent.com/u/64682801?v=4",
  description:
    "Namaste world, I'm a high school student, passionate about *Programming, Embedded system, Linux, and Everything*. I am currently learning *hardware hacking*. Anime, Manga and Manhwa <3.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/shashankx86",
    },
    {
      label: "Github",
      link: "https://github.com/shashankx86",
    },
  ],
};

export default presentation;
