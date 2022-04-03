import React, {useState} from 'react'
import style from '../style/phoneConfirm.module.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom';


function PhoneConfirmation() {
    const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
        <Link exact="true" to='/' className={style.backBtn}>
        <img src='/images/arrow.png' alt='abbas'/>
        </Link>
        <h1>Enter your Phone</h1>
        <PhoneInput international defaultCountry='PK' value={value} onChange={setValue}/>
        <p>By entering your number you're agreeing to our <span>Terms of Service and Privacy Policy.</span> Thanks!!</p>
        <Link exact="true" to='/code_confirm' className=' primaryBtn d-flex align-items-center'>
            Next 
        </Link>
    </div>
  )
}

export default PhoneConfirmation