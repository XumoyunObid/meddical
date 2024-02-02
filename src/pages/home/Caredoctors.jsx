import "./../home/home.css";
import duxtir1 from "../../assets/homee/duxtir1.png"
import duxtir2 from "../../assets/homee/duxtir2.png"
import duxtir3 from "../../assets/homee/duxtir3.png"
import Linkedin from "../../icons/linkedin";
import Facebook from './../../icons/facebook';
import Instagram from './../../icons/instagram';

export const ExportDoctorsCard = () => {
    try {
        return <div className="duxtirCart">
            <div className="doctorCards">
                <img src={duxtir1} />
                <div className="purpleBG">
                    <h1>Doctor’s Name</h1>
                    <h2>Neurology</h2>
                    <div className="inkedin">
                        <Linkedin />
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <button>View Profile</button>
            </div>
            <div className="doctorCards">
                <img src={duxtir2} />
                <div className="purpleBG">
                    <h1>Doctor’s Name</h1>
                    <h2>Neurology</h2>
                    <div className="inkedin">
                        <Linkedin />
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <button>View Profile</button>
            </div>
            <div className="doctorCards">
                <img src={duxtir3} />
                <div className="purpleBG">
                    <h1>Doctor’s Name</h1>
                    <h2>Neurology</h2>
                    <div className="inkedin">
                        <Linkedin />
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
                <button>View Profile</button>
            </div>
        </div>
    } catch (e) { console.log(e); }
}


const Caredoctors = () => {
    return (
        <div className='care'>
            <h1>Trusted Care</h1>
            <h2>Our Doctors</h2>
            <ExportDoctorsCard />
        </div>
    )
}

export default Caredoctors
