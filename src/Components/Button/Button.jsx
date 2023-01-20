import React from 'react';
import s from './Button.module.scss';

const Button = ({
    children, onClick, className, disabled, active, ...attrs
}) => {

    
    

    const classes = classNames(
        'btn',
        className,
        { active },      
    )

    const Tag = attrs.href ? 'a' : 'button';

    return (
        
        <button
        {...attrs}
        className={classes}
        disable ={disabled}
        onClick={onClick}
        >{children} </button> 
    );
};

Button.propTypes ={
    children: propTypes.node,
    onclick :propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool,
    active: propTypes.bool,
}

Button.defaultProps ={
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
}

export default Button;