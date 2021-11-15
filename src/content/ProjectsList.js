import React from 'react';
import Ruby from '../images/TechStack/Ruby.png'
import Rails from '../images/TechStack/Rails.png'

import Angular from '../images/TechStack/Angular.png'
import ReactJS from '../images/TechStack/ReactJS.png'
import Bootstrap from '../images/TechStack/Bootstrap.png'
import MaterialUI from '../images/TechStack/MaterialUI.png'
import AntDesign from '../images/TechStack/AntDesign.png'
import PostgreSQL from '../images/TechStack/PostgreSQL.png'
import GatsBy from '../images/TechStack/Gatsby.png'
import Chrome from '../images/TechStack/chrome.png'

import Portfolio from '../images/Projects/portfolio.png'
import TambolaPic from '../images/Projects/tambola.png'
import StackEcho from '../images/Projects/StackEcho.png'
import LinkAssitance from '../images/Projects/LinkAssitance.png'
import Scalefusion from '../images/Projects/scalefusion.png'
import EnglandHockey from '../images/Projects/englandHockey.jpeg'
import TPN from '../images/Projects/tpn.jpg'
import Nuovo from '../images/Projects/nuovo.png'

const personalProjectsList = [
    {
        title: 'Personal Portfolio',
        technologies: [ReactJS, MaterialUI],
        image: Portfolio,
        description: 'This project is a portfolio website. This website incorporates all details about my skills, journey, education, projects and interests.',
        url: 'https://jyotisharma1234.github.io/',
        githubLink: 'https://github.com/JyotiSharma1234/',
        type: 'Website'
    },
    {
        title: 'Tambola (Housie) Board',
        technologies: [ReactJS, MaterialUI],
        image: TambolaPic,
        description: 'A Tambola or Housie board for Promobi Team. It board shows the current number, last number and all the previous numbers on the board',
        url: 'https://jyotisharma1234.github.io/tambola/',
        githubLink: 'https://github.com/JyotiSharma1234/tambola',
        type: 'Game'
    },
    {
        title: 'Stack Echo',
        technologies: [GatsBy, ReactJS, AntDesign],
        image: StackEcho,
        description: 'My first trial project using Gatsby deployed on Gatsby cloud. A simple memory game to test your memorising power. Want to give it a try...',
        url: 'https://stackechomaster.gatsbyjs.io/',
        githubLink: 'https://github.com/JyotiSharma1234/stack-echo',
        type: 'Game'
    },
    {
        title: 'Link Assistance',
        technologies: [ReactJS, MaterialUI, Chrome],
        image: LinkAssitance,
        description: 'A Google Chrome Extension, Link Assistance, which will generate a QR code for your link or data.',
        githubLink: 'https://github.com/JyotiSharma1234/link-assistant-react-app',
        type: 'Chrome Extension'
    },
]

const organisationProjectsList = [
    {
        title: 'England Hockey',
        image: '',
        technologies: [Ruby, Rails, Bootstrap, PostgreSQL],
        image: EnglandHockey,
        description: 'England Hockey is the national governing body for the sport of field hockey in England. As an intern at Josh Software pvt. ltd. worked on minor features and bug fixes.',
        url: 'https://www.englandhockey.co.uk/',
    },
    {
        title: 'Docterz App',
        image: TPN,
        technologies: [Ruby, Rails, Angular, Bootstrap, PostgreSQL],
        description: 'As a part of Josh Software, I majorly worked on Queue management System for Appointments in a clinic and other minor features.',
        url: 'https://www.docterz.in/',
    },
    {
        title: 'Scalefusion',
        image: Scalefusion,
        technologies: [Ruby, Rails, Angular, Bootstrap, PostgreSQL],
        description: 'As a part of Promobi Technology pvt. ltd., Along with minor feature enhancements, I worked on 2Checkout, SAML SSO integration',
        url: 'https://scalefusion.com/',
    },
    {
        title: 'NuovoPay',
        image: Nuovo,
        technologies: [Ruby, Rails, ReactJS, MaterialUI, PostgreSQL],
        description: 'As a part of Promobi Technology pvt. ltd., Along with minor feature enhancements, I worked on 2Checkout, SAML SSO integration',
        url: 'https://nuovopay.com/',
    },
    {
        title: 'Scalefusion Academia (LearnOS) ',
        image: Scalefusion,
        technologies: [Ruby, Rails, ReactJS, MaterialUI, PostgreSQL],
        description: 'As a part of Promobi Technology pvt. ltd., Along with minor feature enhancements, I worked on 2Checkout, SAML SSO integration',
        url: 'https://academia.scalefusion.com/',
    },
]

export default { personalProjectsList, organisationProjectsList};
