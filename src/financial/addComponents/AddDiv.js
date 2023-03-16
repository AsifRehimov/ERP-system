// import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonsDivDisabled } from "../Financial.styled";
// import AddAdvance from "./AddAdvance";
// import { useEffect } from 'react';
// import axios from "axios";


function AddDiv({disabled, indexSelectApp}) {


    
    return(
        <>
   
          <ButtonsDivDisabled>
                {(disabled === 0) ? <Link className='truedisabled'>Avans əlavə et</Link> :
                <Link  className='falsedisabled' to='/financial_credit/salary/advance/'>Avans əlavə et</Link>
                 }
                {(disabled === 0) ? <Link className='truedisabled'>Bonus əlavə et</Link> : <Link className='falsedisabled' to='/financial_credit/salary/bonus/'>Bonus əlavə et</Link>}
                {(disabled === 0) ? <Link className='truedisabled'>Cərimə əlavə et</Link> : <Link className='falsedisabled' to='/financial_credit/salary/salary-punishment/'>Cərimə əlavə et</Link>}
                {(disabled === 0) ? <Link className='truedisabled'>Kəsinti əlavə et</Link> : <Link className='falsedisabled' to='/financial_credit/salary/salary-deduction/'>Kəsinti əlavə et</Link>}
                {(disabled === 0) ? <Link className='truedisabled'>Ə/H ödə</Link> : <Link className='falsedisabled' to='/financial_credit/salary/pay-salary/'>Ə/H ödə</Link>}
           </ButtonsDivDisabled>
        </>
    )
}
export default AddDiv;