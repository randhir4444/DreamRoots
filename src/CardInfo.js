import user from './user.svg';
import './CardStyle.css';

const CardInfo = [
    {
    tabs: ["Clinic","Test","Surgery","Medicine"],
    profileImage: <img className='profileImage' src={user}/>,
    date: "17th September 2021, 9:30 PM",
    tag: "Appointment with doctor Arun",
    clinic: "Doctor World Clinic",
    test :  "Test: X-ray test",
    surgery: "surgery: X surgery",
    medicine: "Axol, Betadine",
    bottomtTabs: ["RESCHEDULE", "CANCEL", "VIEW"]
    },
    {
    tabs: ["Clinic","Test","Surgery","Medicine"],
    profileImage: <img className='profileImage' src={user}/>,
    date: "18th September 2021, 9:30 PM",
    tag: "Appointment with doctor Arun",
    clinic: "Doctor World Clinic",
    test :  "Test: X-ray test",
    surgery: "surgery: X surgery",
    medicine: "Axol, Betadine",
    bottomtTabs: ["RESCHEDULE", "CANCEL", "VIEW"]
    }
    ]

export default CardInfo;