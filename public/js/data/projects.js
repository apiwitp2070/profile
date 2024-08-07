import {
  tagtrack,
  easygame,
  kuacty,
  heatalert,
  osc,
  goohiw,
  mathgame,
  trsk,
  ratio,
} from "../../img";

const oddBox = "grid lg:grid-cols-2 gap-8";
const evenBox = "flex flex-col lg:flex-row-reverse gap-8";

export const projects = [
  {
    isWeb: false,
    weburl: "/",
    name: "Tagtrack",
    date: "2019",
    position: oddBox,
    image: tagtrack,
    framework: "HTML | JavaScript | Python",
    description:
      "An IoT device that can detect user heart rate. When heart rate exceed a certain point, it will sent out an alarm which can be heared by other people. Design for phobia's patient that might encounter their cause unexpectly.",
  },
  {
    isWeb: true,
    weburl: "https://cpe-easygame.firebaseapp.com",
    name: "EasyGame",
    date: "2019",
    position: evenBox,
    image: easygame,
    framework: "Python | Construct 3 | Firebase",
    description:
      "A simple 2-players local shooting game that can be play with a keyboard or a single button on an IoT board. The gaming part has been developed with Construct 3 engine and hosted with Google Firebase.",
  },
  {
    isWeb: false,
    weburl: "/",
    name: "KU-ACTY",
    date: "2020",
    position: oddBox,
    image: kuacty,
    framework: "React | Material UI",
    description:
      "A website about club and activities in Kasetsart University. You can check your past activities that you attend. Total activity hours. And see how much hours or activity you need to complete. You can also view details such as time or place that that activity take place.",
  },
  {
    isWeb: false,
    weburl: "/",
    name: "Heat Alert",
    date: "2021",
    position: evenBox,
    image: heatalert,
    framework: "Python",
    description:
      "An IoT with a use of PIR censor and heat detector, When a temperature in the room exceed some point, It will sent an alarm to the room that have people.",
  },
  {
    isWeb: "true",
    weburl: "https://online-simple-circuit.vercel.app/",
    name: "Online Simple Circuit",
    date: "2022",
    position: evenBox,
    image: osc,
    framework: "React | GoJS | Tailwind CSS",
    description:
      "An online circuit diagram maker develop using React and GoJS with a purpose of learning tool in the pandemic state. The purpose of the project is to make user experience as close as possible to an actual circuit connection in the classroom With more realistic IC component.",
  },
  {
    isWeb: false,
    weburl: "/",
    name: "Goohiw",
    date: "2022",
    position: oddBox,
    image: goohiw,
    framework: "JSP | HTML | Tailwind CSS",
    description:
      "A practice project in Web IR subject. A search engine about Thai food. With a custom web crawler made for crawling some Thai food-related website as a database. The project has been done in JSP host locally with Apache Tomcat. And the frontend page has been done in HTML with a help of Tailwind CSS.",
  },
  {
    isWeb: "true",
    weburl: "https://math-game-orcin.vercel.app/",
    name: "Math Game",
    date: "2022",
    position: evenBox,
    image: mathgame,
    framework: "Next.js | Tailwind CSS",
    description:
      "A personal project about math-related web app. The website consist of Random number generator, A guessing game, A simple calculator and a math game call THR3ES. which you need to select the lowest number shown in the screen.",
  },
  {
    isWeb: "true",
    weburl: "https://trsk-five.vercel.app/",
    name: "TRSK",
    date: "2024",
    position: oddBox,
    image: trsk,
    framework: "Nuxt 3 | Vuetify | Tailwind CSS",
    description:
      "A simple to do list made in Nuxt 3. Comes with simple Create and remove function. Also playing around with swipe gesture such as slide left to mark as done. The swipe feature only works in mobile.",
  },
  {
    isWeb: "true",
    weburl: "https://ratio-converter.vercel.app/",
    name: "Ratio Converter",
    date: "2024",
    position: evenBox,
    image: ratio,
    framework: "Nuxt 3 | Vuetify | Tailwind CSS",
    description:
      "Real time ratio converter made in Nuxt 3. Result ratio will be show according to base input number which can be changed and calculate new result in realtime without any input confirmation such as Enter button.",
  },
];
