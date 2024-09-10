import { useState, useRef, useContext } from "react";
import "./Reservation.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import HttpContext from "../Context/HttpContext";
import { useNavigate } from "react-router-dom";


//let baseUrl = 'http://127.0.0.1:3000'
let baseUrl = 'https://resturant-backend-34sx.onrender.com'

const Reservation = () => {


    let hours = [{ value: 12, show: '12 pm' }, { value: 13, show: '1 pm' }, { value: 14, show: '2 pm' }, { value: 15, show: '3 pm' },
    { value: 16, show: '4 pm' }, { value: 17, show: '5 pm' }, { value: 18, show: '6 pm' }, { value: 19, show: '7 pm' }, { value: 20, show: '8 pm' },
    { value: 21, show: '9 pm' }, { value: 22, show: '10 pm' }, { value: 23, show: '11 pm' }]

    let tables = [];

    const navigate = useNavigate();

    let [checkBoooxx, setcheckBoooxx] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [fromTime, setFromTime] = useState();
    const [toTime, setToTime] = useState();
    const [Datee, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const datePickerRef = useRef(null);
    const [popUpStyle, setPopStyle] = useState('popUp1')
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    let ctx = useContext(HttpContext)


    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 6);

    const currentDate = new Date();
    const hour = currentDate.getHours();

    function toogleDatePicker() {
        setIsOpen(!isOpen);
        if (!isOpen) {
            datePickerRef.current.setOpen(true)
        }
    }

    function onSelectClick(event) {
        event.preventDefault();
        setSpinner(true)
        let obj1 = {
            date: Datee.toDateString(),
            fromtime: fromTime,
            totime: toTime,
        }
        ctx.getBooking(`${baseUrl}/resturant/v1/booking/getBooking`, obj1).then((res) => {
            let arr = res.data.data;
            let arr2 = []
            arr.forEach(item => {
                let arr1 = item.table;

                arr1.forEach(item1 => {
                    arr2.push(item1)
                })
            })
            setcheckBoooxx(arr2);
            setSpinner(false)
        }).catch((err)=>{
            alert(err.message)
            setPopStyle('popUp1');
        })
        if (firstName.current.value != '' && lastName.current.value != '' && email.current.value != '') {
            setPopStyle('popUp')
        }
        else {
        alert('please enter all the fields')
        
        }
           
    }

    function onDatePickerChange(event) {
        if (event === '') {
            setDate(new Date())
        }
        setDate(event)
    }

    function onCancelClick() {
        setPopStyle('popUp1');

    }

    function onOkClick() {
        if (check1.checked) {
            tables.push(check1.value)
        }
        if (check2.checked) {
            tables.push(check2.value)
        }
        if (check3.checked) {
            tables.push(check3.value)
        }
        if (check4.checked) {
            tables.push(check4.value)
        }
        if (check5.checked) {
            tables.push(check5.value)
        }
        if (check6.checked) {
            tables.push(check6.value)
        }
        if (check7.checked) {
            tables.push(check7.value)
        }
        if (check8.checked) {
            tables.push(check8.value)
        }
        if (check9.checked) {
            tables.push(check9.value)
        }
        if (check10.checked) {
            tables.push(check10.value)
        }
        if (check11.checked) {
            tables.push(check11.value)
        }
        if (check12.checked) {
            tables.push(check12.value)
        }
        let obj1 = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            date: Datee.toDateString(),
            fromtime: fromTime,
            totime: toTime,
            email: email.current.value,
            table: tables
        }
        ctx.PostData(`${baseUrl}/resturant/v1/booking/create`, obj1).then((res) => {
            ctx.successPage = true
            console.log(ctx.successPage)
            navigate("/success")
        }).catch((err) => {
            if (err.response.data.error.includes('The table array must not be empty')) {
                alert('Please select the table!')
            } else {
                alert('interal server error!!')
            }
        })


    }


    return (
        <section id="reservation" className="reservation">

            <div className={popUpStyle}>
                {spinner && <div className="spinner"></div>}
                {!spinner &&
                    <>
                        {!checkBoooxx.includes(1) && <input type="checkbox" id="check1" style={{ position: 'absolute', marginTop: -32, marginRight: -3, width: 30, height: 30 }} value={1} />}
                        {checkBoooxx.includes(1) && <h3 type="text" id="check1" style={{ position: 'absolute', marginTop: -27, marginRight: 30, width: 30, height: 30 }}>Booked</h3>}

                        {!checkBoooxx.includes(2) && <input type="checkbox" id="check2" style={{ position: 'absolute', marginTop: -134, marginRight: 648, width: 30, height: 30 }} value={2} />}
                        {checkBoooxx.includes(2) && <h3 type="text" id="check2" style={{ position: 'absolute', marginTop: -126, marginRight: 678, width: 30, height: 30 }}>Booked</h3>}

                        {!checkBoooxx.includes(3) && <input type="checkbox" id="check3" style={{ position: 'absolute', marginTop: -132, marginLeft: 635, width: 30, height: 30 }} value={3} />}
                        {checkBoooxx.includes(3) && <h3 type="text" id="check3" style={{ position: 'absolute', marginTop: -125, marginLeft: 600, width: 30, height: 30 }} value={3}>Booked</h3>}

                        {!checkBoooxx.includes(4) && <input type="checkbox" id="check4" style={{ position: 'absolute', marginTop: 211, marginLeft: 496, width: 30, height: 30 }} value={4} />}
                        {checkBoooxx.includes(4) && <h3 type="text" id="check4" style={{ position: 'absolute', marginTop: 217, marginLeft: 464, width: 30, height: 30 }} value={4}>Booked</h3>}

                        {!checkBoooxx.includes(5) && <input type="checkbox" id="check5" style={{ position: 'absolute', marginTop: 239, marginLeft: -6, width: 30, height: 30 }} value={5} />}
                        {checkBoooxx.includes(5) && <h3 type="checkbox" id="check5" style={{ position: 'absolute', marginTop: 245, marginLeft: -40, width: 30, height: 30 }} value={5}>Booked</h3>}

                        {!checkBoooxx.includes(6) && <input type="checkbox" id="check6" style={{ position: 'absolute', marginTop: 211, marginLeft: -523, width: 30, height: 30 }} value={6} />}
                        {checkBoooxx.includes(6) && <h3 type="checkbox" id="check6" style={{ position: 'absolute', marginTop: 211, marginLeft: -523, }} value={6}>Booked</h3>}

                        {!checkBoooxx.includes(7) && <input type="checkbox" id="check7" style={{ position: 'absolute', marginTop: 90, marginLeft: -202, width: 30, height: 30 }} value={7} />}
                        {checkBoooxx.includes(7) && <h3 type="checkbox" id="check7" style={{ position: 'absolute', marginTop: 90, marginLeft: -202, }} value={7}>Booked</h3>}

                        {!checkBoooxx.includes(8) && <input type="checkbox" id="check8" style={{ position: 'absolute', marginTop: 90, marginLeft: 206, width: 30, height: 30 }} value={8} />}
                        {checkBoooxx.includes(8) && <h3 type="checkbox" id="check8" style={{ position: 'absolute', marginTop: 90, marginLeft: 206, }} value={8}>Booked</h3>}

                        {!checkBoooxx.includes(9) && <input type="checkbox" id="check9" style={{ position: 'absolute', marginTop: -32, marginRight: -409, width: 30, height: 30 }} value={9} />}
                        {checkBoooxx.includes(9) && <h3 type="text" id="check9" style={{ position: 'absolute', marginTop: -26, marginRight: -378, width: 30, height: 30 }}>Booked</h3>}

                        {!checkBoooxx.includes(10) && <input type="checkbox" id="check10" style={{ position: 'absolute', marginTop: -32, marginRight: 446, width: 30, height: 30 }} value={10} />}
                        {checkBoooxx.includes(10) && <h3 type="text" id="check10" style={{ position: 'absolute', marginTop: -28, marginRight: 476, width: 30, height: 30 }}>Booked</h3>}

                        {!checkBoooxx.includes(11) && <input type="checkbox" id="check11" style={{ position: 'absolute', marginTop: -156, marginRight: 241, width: 30, height: 30 }} value={11} />}
                        {checkBoooxx.includes(11) && <h3 type="text" id="check11" style={{ position: 'absolute', marginTop: -149, marginRight: 272, width: 30, height: 30 }}>Booked</h3>}

                        {!checkBoooxx.includes(12) && <input type="checkbox" id="check12" style={{ position: 'absolute', marginTop: -156, marginRight: -186, width: 30, height: 30 }} value={12} />}
                        {checkBoooxx.includes(12) && <h3 type="text" id="check12" style={{ position: 'absolute', marginTop: -148, marginRight: -155, width: 30, height: 30 }}>Booked</h3>}
                    </>
                }

                <button style={{ width: 100, height: 30, position: 'absolute', marginTop: 370, backgroundColor: 'black', color: "white", }} onClick={onOkClick}>Ok</button>
                <MdCancel style={{ position: 'absolute', marginTop: -350, marginLeft: 801, fontSize: 30 }} onClick={onCancelClick}></MdCancel>
                <img src="/seater.PNG" alt="" />
            </div>
            <div className="ReservImg">
                <img src="./reservation.png" alt="" />
            </div>
            <div className="reservForm" >
                <div className="reserveForm1" style={{ display: popUpStyle === 'popUp' ? 'none' : '' }}>
                    <form>
                        <input type="text" placeholder="Email" style={{ width: 390, border: "2px solid black", height: 30, textAlign: 'center', marginBottom: 10, borderRadius: 5 }} ref={email} />
                        <input type="text" placeholder="First name" style={{ width: 190, border: "2px solid black", height: 30, textAlign: 'center', borderRadius: 5 }} ref={firstName} />
                        <input type="text" placeholder="Last name" style={{ width: 190, border: "2px solid black", height: 30, textAlign: 'center', marginLeft: 5, borderRadius: 5 }} ref={lastName} />
                        <div className="datePicker">
                            <DatePicker ref={datePickerRef} selected={Datee} onChange={onDatePickerChange} minDate={new Date()} maxDate={maxDate} ></DatePicker>
                            <CiCalendarDate onClick={toogleDatePicker} style={{ fontSize: '30px' }} />
                        </div>
                        <select name="" id="" onChange={(event) => { setFromTime(event.target.value) }}>
                            <option value="">---select start time----</option>
                            {hours.filter((ele) => {
                                if (Datee !== '' && Datee !== null) {
                                    if (Datee.getDate() == currentDate.getDate()) {
                                        return ele.value > hour
                                    }
                                    else {
                                        return ele.value
                                    }
                                }
                            }).map((hour) => (
                                <option key={hour.value} value={hour.value}>
                                    {hour.show}
                                </option>
                            ))}</select>

                        <select name="" id="" onChange={(event) => { setToTime(event.target.value) }} style={{ marginLeft: 5 }}>
                            <option value="">---select end time----</option>
                            {hours.filter((ele) => {
                                return ele.value > fromTime

                            }).map((hour) => (
                                <option key={hour.value} value={hour.value}>
                                    {hour.show}
                                </option>
                            ))}</select>
                        <button style={{ height: 30, width: 392, marginTop: 10 }} onClick={onSelectClick} disabled={fromTime == null || fromTime == '' || toTime == null || toTime == ''}>Select seat</button>
                    </form>
                </div>
            </div>
        </section>

    )

}


export default Reservation;