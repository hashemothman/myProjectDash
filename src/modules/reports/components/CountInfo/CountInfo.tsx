import './CountInfo.css'

const CountInfo = (props:{iconName:any,title:string ,number:any,imgAlt:string}   ) => {
  return (
    <div className="ho-card-info">
      <div className="ho-card-info-child">
        <img src={props.iconName} alt={props.imgAlt} />
        <div className="ho-card-info-text">
          <h3>{props.title} </h3>
          <h5>{props.number}</h5>

        </div>

      </div>
    </div>
  )
}

export default CountInfo