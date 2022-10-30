import './Card.css';
//import React from 'react';

export default function Card(props){
    const {
        rate,
        speed,
        isSelected,
        onDivClick
    } = props;

    let className = `item item__${rate}`;
    
    if(isSelected) {
        className += ' selected';
    }

    function onClick() {
        onDivClick(rate)
    }
   
    return (
        <div className = {className} onClick={onClick}>
            <div className = {`item__header item__header_${rate}`}>
                <p>Безлимитный {rate}</p>
            </div>
            <div className = {`item__rate item__rate_${rate}`}>
                <span className='rub'>руб </span>
                <span className='rate'> {rate}</span>
                <span className='month'>/мес</span>            
            </div>
            <div className="item__speed">
                <p> до {speed} Мбит/сек</p>      
            </div>
            <div className="item__footer">
                <p>Объем включенного трафика не ограничен</p>
            </div>
    </div>
    );
}