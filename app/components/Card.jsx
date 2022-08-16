export default function Card(props) {

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={props.imageUrl} alt={props.title} />
      </div>
      <div className="card-info">
        <h4 className="card-location">📌 {props.location}</h4>
        <h3 className="card-title">{props.title}</h3>
        <h6 className="card-date">{props.date}</h6>
        <p className="card-desc">{props.description}</p>
      </div>
    </div>
  )
}
