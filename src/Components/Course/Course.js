import React from 'react';
import './Course.css'
const Course = (props) => {
    console.log(props);
    const {Picture,CourseName,InstructorName,Price} = props.course;
    return (
        <div className="allCourse">
            <div>
                <img width="150px" height="100%" src={Picture} alt=""/>
            </div>
            <div className="course-details" >
                <h4>Title: {CourseName}</h4>
                <p><small>Instructor Name: {InstructorName}</small></p>
                <p><strong>Price: ${Price}</strong></p>
                <button onClick={ () => props.addEventHandler(props.course)} className="enrollButton" >Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;