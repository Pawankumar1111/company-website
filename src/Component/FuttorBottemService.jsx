import React,{useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {bottomServiceAction} from '../Redux/Actions/BottomSerAction'

const FuttorBottemService = () => {
    const getService = useSelector(state => state.getSubService)
    const {bottoms} = getService
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bottomServiceAction)
    },[])
    return (
        <>

        
            <div className="container-fluid accordian-content">
            {bottoms&&bottoms.map((item,index) => {
                return( <div className="row">
                    <div className="col-lg-3 digital-m">
                        <p className="d-marketing" key={index}>{item.serviceNameHeader}</p>
                    </div>
                    <div className="col-lg-9">
                        <div className="container-fluid">
                            <div className="row">
                                {bottoms&&bottoms.map((item,index) => {
                                    return( <div className="col-lg-3 btm-service">
                                    <a href="" className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div>)
                                })}
                                {/* <div className="col-lg-3 btm-service">
                                    <a href="" className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div>
                                <div className="col-lg-3 btm-service">
                                    <a href=""  className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div>
                                <div className="col-lg-3 btm-service">
                                    <a href=""  className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div>
                                <div className="col-lg-3 btm-service">
                                    <a href=""  className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div>
                                <div className="col-lg-3 btm-service">
                                    <a href=""  className="text-bottom"  key={index}>{item.subServiceList}</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>)
            })}
               
            </div>


            
        </>
    )
}

export default FuttorBottemService;