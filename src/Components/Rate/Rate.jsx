import './Rate.css';

export default function Rate(props) {
    return (
        <div className = {`item__rate item__rate_${props.rate}`}>
            <span className='rub'>руб </span>
            <span className='rate'> {props.rate}</span>
            <span className='month'>/мес</span>            
        </div>
    );
}