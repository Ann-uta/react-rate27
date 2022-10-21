import './CardHeader.css';

export default function CardHeader(props){
    return (
        <div className = {`item__header item__header_${props.rate}`}>
            <p>Безлимитный {props.rate}</p>
        </div>
    );
}