export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "DebloaterX",
    techs: ["Debloater for Android [NoRoot]"],
    link: "https://github.com/shashankx86/DebloaterX",
  },
  {
    title: "A20s Device Tree",
    techs: ["PBRP/SHRP/OFR Tree for Galaxy A20s | SM-A207F "],
    link: "https://github.com/shashankx86/android_device_samsung_a20s",
  }
];

export default projects;
