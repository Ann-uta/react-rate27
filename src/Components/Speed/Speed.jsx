import './Speed.css';

export default function Speed(props) {
    return (
        <div className="item__speed">
            <p> до {props.speed} Мбит/сек</p>      
        </div>
    );
}