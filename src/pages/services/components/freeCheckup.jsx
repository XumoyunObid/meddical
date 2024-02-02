import React from 'react'
import './freeCard.css'
import freeImg from '../../../assets/Services-Img/free-img.svg'
import freeBtn from '../../../assets/Services-Img/free-loremBtn.svg'
import cardHover from '../../../assets/Services-Img/freeCard-hover.svg'

export const FreeCheckup = () => {
    return <div className='freeCards'>
        <div className="free-img"> <img src={freeImg} alt="Image" /> </div>
        <div className="free-title">
            <h3>Free Checkup</h3>
            <p>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing Quisque <br />
                placerat Convallis felis vitae tortor <br /> augue. Velit nascetur massa in.
            </p>
            <button className="free-btn">Learn More <span><img src={freeBtn} alt="" /></span></button>
        </div>
    </div>
}
