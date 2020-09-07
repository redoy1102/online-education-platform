import React, { useState, useEffect } from 'react';
import { fakedata } from '../Data/fakedata' 
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Shop = () => {

    //fakedata
    //console.log(fakedata)
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        setCourses(fakedata)
    },[])

    const [count, setCount] = useState([])

    //Event handler
    const addEventHandler = (course) =>{
        const newCount = [...count,course]
        setCount(newCount);
    }


    return (
        <div className="main-ui" >
            <div className="course-info" >
                {
                    courses.map(course => <Course addEventHandler={addEventHandler}  course={course}></Course>)
                }
            </div>
            <div className="course-cart">
                <Cart count={count} ></Cart>
            </div>
        </div>
    );
};

export default Shop;