
//PropTypes ensures that the passed value is of the correct datatype
import PropTypes from 'prop-types'
//defaultProps values for props in case they are not passed from the parent compomnent

function Student(props){
    return (
        <div className="student">
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p> Student : {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name : "Guest",
    age: 0,
    isStudent: true,
}

export default Student