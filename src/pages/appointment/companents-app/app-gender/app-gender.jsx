import React from 'react'
import "./app-gender.css"

export const AppGender = () => {
  return (
    <div>
      <div className="appointment-gender2">
        <label className="labell-gender">
          <input className="a" type="text" placeholder="Name" />
          <select className="a">
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="labell-gender">
          <input className="a-gender" type="email" placeholder="Email" />
          <input className="a-gender" type="number" placeholder="Phone" />
        </label>
        <label className="labell-gender">
          <input className="a-gender" type="date" placeholder="Date" />
          <input className="a-gender" type="datetime-local" placeholder="Time" />
        </label>
        <label className="labell-gender">
          <select className="a-gender">
            <option value="doctor">Doctor</option>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
          <select className="a-gender">
            <option value="department">Department</option>
            <option value="m">m</option>
            <option value="c">c</option>
          </select>
        </label>
        <textarea className="b-gender" cols="30" rows="10" placeholder="Message"></textarea>
        <button className="button-gender">Submit</button>
      </div>
    </div>
  );
}
