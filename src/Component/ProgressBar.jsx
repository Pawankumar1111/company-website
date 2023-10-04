import React from 'react'
import Circle1 from './Circle1'
import Circle2 from './Circle2'
import Circle3 from './Circle3'
import Circle4 from './Circle4'
const ProgressBar = () => {
    return (
        <>



    
<div className="container-fluid pro">
    <div className="row">
        <div className="col-sm-6 col-lg-3  col-lg-31">
            <Circle1 />
            <h2 className="text-center color" > Software Development</h2>
        </div>

        
        <div className="col-sm-6 col-lg-3  col-lg-31">
        <Circle2 />
            <h2 className="text-center color">Web<br></br> Development</h2>
        </div>

        
    <div className="col-sm-6 col-lg-3  col-lg-31">
    <Circle4 />
            <h2 className="text-center color"> SEO</h2>
    </div>


    <div className="col-sm-6 col-lg-3  col-lg-31">
    <Circle4 />
            <h2 className="text-center color"> Lead Generation</h2>
    </div>
    </div>
</div>
        </>
    )
};
 export default ProgressBar;
