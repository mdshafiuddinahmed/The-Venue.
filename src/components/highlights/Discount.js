import React,{useState,useEffect } from 'react';
import {Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton';

const Discount = () => {
    const end =30;
    const [start,setStart] = useState(0);

    const porcentage = () =>{
        if(start<end){
            setStart(prevCount => prevCount+1)
        }
    }

    useEffect(()=>{
        if(start>0 && start<30){
            setTimeout(()=>{
                setStart(precount=>precount+1)
            },)

        }
    })
    return(
        <div className='centre_wrapper '>
        <div  className='discount_wrapper'>

            <Fade>
                <div className="discount_porcentage">
                    <span>30%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide right>
                <div className='dicount_description'>
                    <h3>Purchase Tickets before 2oth June.</h3>
                    <p>
                        Hello, everybody this is Md Shafiuddin Ahmed from Hyderabad 
                        I completed my Bachelors from Muffakham JAh college of Engineering
                        and will be persuing my Masters freom Montclair State University New york, USA.
                    </p>
                    <MyButton
                       text="Purchase tickets"
                       link="http://google.com"
                       size="small"
                       style={{
                            background:'#ffa800',
                            color:'#ffffff',
                       }}
                    
                    />


                </div>

            </Slide>

        </div>

        </div>
    )
}

export default Discount;