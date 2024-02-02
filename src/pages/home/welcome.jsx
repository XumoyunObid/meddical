import "./../home/home.css";
import Calendar from './../../icons/calendar';
import Users from './../../icons/users';
import Money from './../../icons/money';

const Welcomeeee = () => {
  return (
    <div>
      <div className="welcomee">
        <div className="header2">
          <div className="calendars">
            <h3 className="calendarsh1">Book an Appointment</h3>
            <Calendar/>
          </div>
          <div className="users">
            <h3 className="calendarsh1">Book an Appointment</h3>
            <Users/>
          </div>
          <div className="money">
            <h3 className="calendarsh1">Book an Appointment</h3>
            <Money/>
          </div>
        </div>
        <h1>Welcome to Meddical</h1>
        <h2>A Great Place to Receive Care</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        <a href="#">Learn More </a>
    </div>
    </div>
  )
}

export default Welcomeeee
