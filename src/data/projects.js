import project1 from "../assets/Portfolio.PNG"
import project2 from "../assets/ColorTheory.PNG"
import project3 from "../assets/Sleepscheduler.PNG"

import project1L from "../assets/PortfolioL.png"
import project2L from "../assets/ColorTheoryL.png"
import project3L from "../assets/SleepschedulerL.png"
const PROJECTS = [
    {
        id: 1,
        title: 'Sleep Scheduler Website',
        description: 'A website for keeping track of sleep times and giving a score based on how healthy you sleep, has a fully integrated login system for individual users. Made with React, Firebase, react-redux, react-bootstrap, axios, Javascript and more!',
        image: project3,
        lazyImage: project3L,
        link: "https://aplamer.github.io/scheduler/#/"
    },
    {
        id: 2,
        title: 'Color Theory Website',
        description: 'A website for informing people about the different aspects of color theory, with some tools to help understand and utilize them better. Technologies used: CSS, HTML, Angular 10, Bootstrap(Styling only), Typescript',
        image: project2,
        lazyImage: project2L,
        link: "https://aplamer.github.io/ColorTheory/about"
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'The website you\'re on right now! Created to showcase myself to potential employer. This website does it\'s best to showcase a firm understanding of web development. Technologies used: Javascript, CSS, HTML, React JS, Bootstrap(Styling only)',
        image: project1,
        lazyImage: project1L,
        link: "https://aplamer.github.io/Portfolio/#/"

    },
    
];

export default PROJECTS;