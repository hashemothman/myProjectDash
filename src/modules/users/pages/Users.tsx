import PalanceCard from "../components/PalanceCard/PalanceCard";
import UserCard from "../components/UserCard/UserCard";
import './Users.css'
import syria from "../../../assets/flag/syria.png"
import iraq from "../../../assets/flag/iraq.png"
import usa from "../../../assets/flag/USA.png"
const Users = () => {
  return (
  <div className="ho-header-users">
    <UserCard/>
    <PalanceCard name='ليرة سورية' image={syria} palance={200.2}/>
    <PalanceCard name='دولار امريكي' image={usa} palance={200.2}/>
    <PalanceCard name='دينار عراقي' image={iraq} palance={200.2}/>
  </div>
  )
}

export default Users;