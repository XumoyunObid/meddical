import React from 'react'

const Appointment = () => {
  return (
    <div className='appointment'>
        <div className="app">
            <div className='appointment1'>
                <h1>Book an Appointment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
            </div>
            <div className='appointment2'>
                <label className='labell'>
                    <input  className='a' type="text" placeholder='Name' />
                    <select className='a'>
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label className='labell'>
                    <input className='a' type="email" placeholder='Email' />
                    <input className='a' type="number" placeholder='Phone' />
                </label>
                <label className='labell'>
                    <input className='a' type="date" placeholder='Date' />
                    <input className='a' type="datetime-local" placeholder='Time' />
                </label>
                <label className='labell'>
                    <select className='a'>
                        <option value="doctor">Doctor</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                    <select className='a'>
                        <option value="department">Department</option>
                        <option value="m">m</option>
                        <option value="c">c</option>
                    </select>
                </label>
                <textarea className='b'  cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
  )
}

export default Appointment
