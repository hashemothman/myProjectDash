import './PalanceCard.css'

const PalanceCard = (props:{palance:any,image:string,name:string}) => {
  return (
    <div className='ho-palance-user'>
        <div className="ho-header-palance">
            <h1>مجموع رصيد المستخدمين</h1>
            <p>{props.palance}</p>
        </div>
        <div className="ho-footer-palance">
        <img src={props.image} alt=""  />
        <p>{props.name}</p>
        </div>
    </div>
  )
}

export default PalanceCard