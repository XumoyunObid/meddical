import "./../home/home.css";
import Welcome from "./welcome";
import Nigga from "./nigga";
import Services from './Services';
import Specialities from "./Specialities";
import Appointment from './Appointment';
import Caredoctors from './Caredoctors';
import News from './News';
import Touch from './Touch';

export const Home = () => {
  return (
    <div>
      <div className='bg'>
          <div className="roundedBG">
            <div className="doctor">
              <div className="caring">
                  <h6>Caring for Life</h6>
                  <h5>Leading the Way <br /> in Medical Excellence</h5>
                  <button>Our Services</button>
              </div>
            </div>
          </div>
      </div>
      <Welcome/>
      <Nigga/>
      <Services/>
      <Specialities/>
      <Appointment/>
      <Caredoctors/>
      <News/>
      <Touch/>

    </div>
  )
}
