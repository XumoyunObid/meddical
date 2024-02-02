import "./../home/home.css";
import Homeiconblue from './../../icons/home-icon-blue';
import Homebluecircle from './../../icons/home-blue-circle';
import nurse1 from "../../assets/homee/nurse1.png"
import nurse2 from "../../assets/homee/nurse2.png"


const Services = () => {
  return (
    <div className='services'>
        <h1>Care you can believe in</h1>
        <h2>Our Services</h2>
        <div className="serr">
            <div className="service1">
                <div className="service1-1">
                    <Homeiconblue/>
                    <h2>Free Checkup</h2>
                </div>
                <div className="service1-1">
                    <Homeiconblue/>
                    <h2>Free Checkup</h2>
                </div>
                <div className="service1-1">
                    <Homeiconblue/>
                    <h2>Free Checkup</h2>
                </div>
                <div className="service1-1">
                    <Homeiconblue/>
                    <h2>Free Checkup</h2>
                </div>
                <div className="service1-2">
                    View All
                </div>
            </div>
            <div className="service2">
                <h1>A passion for putting patients first.</h1>
                <div className="circleDiv">
                    <div className="cccircle">
                        <span className="circleBlue"><Homebluecircle/> A Passion for Healing</span>
                        <span className="circleBlue"><Homebluecircle/> All our best</span>
                        <span className="circleBlue"><Homebluecircle/> A Legacy of Excellence</span>
                    </div>
                    <div className="cccircle">
                        <span className="circleBlue"><Homebluecircle/> 5-Star Care</span>
                        <span className="circleBlue"><Homebluecircle/> Believe in Us</span>
                        <span className="circleBlue"><Homebluecircle/> Always Caring</span>
                    </div>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p> <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                </div>
                </div>
            <div className="service3">
                <img src={nurse1} className="nurse" />
                <img src={nurse2} className="nurse" />
            </div>
        </div>
    </div>
  )
}

export default Services
