import React, {useEffect , useState} from 'react'
import axios from 'axios'

const ImageSlider = ()=> {
    
  const API= "https://draggital-backend.herokuapp.com/api";

  const getBanners=async ()=>{
      const result = await axios.get(`${API}/get-banner`);
      return result;
  }
  const [title,setTitle] = useState([]);

  useEffect(()=>{
       getBanners().then((banner)=>{
        // console.log(banner.data[0]);
        const img = banner.data.map(function (cimg) {
          return cimg;
        })
        console.log(img[0].title2);
       
       setTitle(img[0]);
       //console.log(title.title1);
       })
      
  },[]);

    return (
        <>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" id ="home">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        
                        <img className="d-block w-100" src={`${API}/get-banner-image1?name=image1`} alt="First slide" />
                        <div class="animated-title carousel-caption">
                            <div class="text-top">
                                <div className='fontSlider' style={{marginLeft:60}}>
                                    <span style={{fontSize:30}}>{title.title1}</span>
                                    <span className="slidetitle" style={{fontSize:40}}>{title.oneLiner1}</span>                                    
                                </div>
                            </div>
                            <div class="text-bottom">
                                <div className="btn-slide">
                                    <button className="btn-slide1 btnSlider" >See Services</button>
                                    <button className="btn-slide2 btnSlider" >Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={`${API}/get-banner-image1?name=image2`} alt="Second slide" />
                        <div class="animated-title carousel-caption">
                            <div class="text-top">
                                <div className='fontSlider' style={{marginRight:210}}>
                                    <span style={{fontSize:30}}>{title.title2}</span>
                                    <span className="slidetitle" style={{fontSize:40}}>{title.oneLiner2}</span>
                                   
                                </div>
                            </div>
                            <div class="text-bottom">
                                <div className="btn-slide">
                                    <button className="btn-slide1 btnSlider" >See Services</button>
                                    <button className="btn-slide2 btnSlider" >Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={`${API}/get-banner-image1?name=image3`} alt="Third slide" />
                        <div class="animated-title carousel-caption">
                            <div class="text-top">
                                <div className='fontSlider' style={{marginRight:210}}>
                                    <span style={{fontSize:30}}>{title.title3}</span>
                                    <span  className="slidetitle" style={{fontSize:40}}>{title.oneLiner3}</span>
                                    
                                </div>
                            </div>
                            <div class="text-bottom">
                                <div className="btn-slide">
                                    <button className="btn-slide1 btnSlider" >See Services</button>
                                    <button className="btn-slide2 btnSlider" >Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
};
export default ImageSlider;
