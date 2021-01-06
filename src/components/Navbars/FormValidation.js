import React from 'react';
import PropTypes from 'prop-types';


const ErrorBox = (props) => {
    debugger;
    const { name, email,phone, testType,location,message,kvkk } = props;
    let className = 'ui message ' + type;
    return(
        <>
            { visible &&
                
            <div className={className}>{message}</div>
            }
        </>
    )

}

ErrorBox.propTypes = {​​​​
    name:  PropTypes.any.isRequired,
    email:  PropTypes.any.isRequired,
    phone:  PropTypes.any.isRequired,
    testType: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    message: PropTypes.any.isRequired ,
    kvkk: PropTypes.any.isRequired
  }​​​​;  
export default ErrorBox;