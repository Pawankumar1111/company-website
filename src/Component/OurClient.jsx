// import React,{useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {LogoAction} from '../Redux/Actions/LogoAction'


//  const MultiSlider =()=> {


//     const getLogo = useSelector(state => state.getLogo);
//   const {logos} = getLogo

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(LogoAction())
//   },[])
//      return (
//          <>

//         <div className="my-5">
//             <h1 className="text-center"> Our Client</h1>
//         </div>
//             <div className="slider-client">
//                 <div className="slide-track">
//                     <div className="slide-client">
//                     {logos&&logos.map((item,index)=>{
//                         return(
//                         <img className="client-img" key={index} src={item.imageURL} alt="image 1" />
//                         )
//                         }
//                     )
//                 } 
//                     </div>
//                 </div>
//             </div>


//          </>
//      )
// }
// export default MultiSlider;


import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LogoAction } from '../Redux/Actions/LogoAction'


import '../App.css'
const MultiSlider = () => {
    const getLogo = useSelector(state => state.getLogo);
    const { logos } = getLogo

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LogoAction())
    }, [])
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Client</h1>
            </div>
            <div className="slider-client">

                <div className="slide-track">
                    {logos && logos.map((item) => {
                        return (

                            <img className="client-img" src={item.imageURL} alt="image 1" />

                        )
                    })}

                </div>
            </div>


        </>
    )
}
export default MultiSlider;



