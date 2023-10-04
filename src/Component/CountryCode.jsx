import axios from 'axios'
import React, {useEffect , useState} from 'react'
import Futtor from '../Component/Futtor'
import { NavLink } from 'react-router-dom'
import img1 from '../images/1.jpg'

const News =()=>{
   
  
    const API= "https://draggital-backend.herokuapp.com/api";
  const getBanners=async ()=>{
      const result = await axios.get(`https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=false&sensor=false&key=API_KEY`);
      console.log(result);
      return result;
  }
  const [serviceList,setServiceList] = useState([]);
  getBanners();
//   useEffect(()=>{
//        getBanners().then((response)=>{
//         // console.log(banner.data[0]);
//         const servicedata = response.map(function (cimg) {
//           return cimg;
//         })
//         //console.log(aboutdata[0].heading2);
//         setServiceList(servicedata);
//         console.log(serviceList);
//        })
      
//   },[]);
    return(
        <>
        <h1>Hiimnbca121</h1>


        </>
    )
}

export default News;

