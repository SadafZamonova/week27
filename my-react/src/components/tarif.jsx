import './tarif.css'

function Tarifs(props) {
    const {item} = props;

    return (
        <div className="card">
         <div className="card_title">{ item.name }</div>
         <div className="card_item1">{ item.price }</div>
         <div className="card_item2">{ item.speed }</div>
         <div className="card_item3">{ item.description }</div>
         </div>
    )
}

export default Tarifs;