import PropTypes from "prop-types"
import styled from './styled/Button.module.css'
import React from 'react';
function Button(props){
    return <button onClick={props.onClick} className={styled.btn}>{props.text}</button>
}


Button.prototype={
    text:PropTypes.string.isRequired
}
export default Button;