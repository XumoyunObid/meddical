import "./../home/home.css";
import Nigga from "./nigga";
import Services from './Services';
import Specialities from "./Specialities";
import Caredoctors from './Caredoctors';
import Touch from './Touch';
import Welcomeeee from "./welcome";
import Appointmenteee from './Appointment';
import Newseee from "./News";

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

      <Welcomeeee/>
      <Nigga/>
      <Services/>
      <Specialities/>
      <Appointmenteee/>
      <Caredoctors/>
      <Newseee/>
      <Touch/>

    </div>
  )
}
