import PalanceCard from "../components/PalanceCard/PalanceCard";
import UserCard from "../components/UserCard/UserCard";
import "./Users.css";
import syria from "../../../assets/flag/syria.png";
import iraq from "../../../assets/flag/iraq.png";
import usa from "../../../assets/flag/USA.png";
import UserUnActive from "../components/UserUnActive/UserUnActive";
const Users = () => {
  return (
    <>
      <div className="ho-header-users">
        <UserCard />
        <PalanceCard
          name="ليرة سورية"
          image={syria}
          palance={200.2}
          title="مجموع رصيد المستخدمين"
          palanceButton="no"
        />
        <PalanceCard
          name="دولار امريكي"
          image={usa}
          palance={200.2}
          title="مجموع رصيد المستخدمين"
           palanceButton="no"
        />
        <PalanceCard
          name="دينار عراقي"
          image={iraq}
          palance={200.2}
          title="مجموع رصيد المستخدمين"
          palanceButton="no"
        />
      </div>
      <div className="ho-user-no-active">
        <UserUnActive type="active" />
      </div>
     
    </>
  );
};

export default Users;
