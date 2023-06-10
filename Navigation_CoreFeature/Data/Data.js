import Phone from '../assets/phone.png'
import Desktop from '../assets/desktop.png'
import Web from '../assets/web.png'
import Tech from '../assets/tech.png'
import {Image} from 'react-native'


const projectsData = [
  {
    name:"Web Services",
    category:"Web Programming",
    typeOfService:"WebSite",
    image:Web
  },
  {
    name:"App services",
    category:"App Development",
    typeOfService:"Apps",
    image:Phone
  },
  {
    name:"Desktop Software",
    category:"Desktop Development",
    typeOfService:"Softwares",
    image:Desktop
  },
  {
    name:"Computer Services",
    category:"Support",
    typeOfService:"Tech Support",
    image:Tech
  }
]

export default projectsData;