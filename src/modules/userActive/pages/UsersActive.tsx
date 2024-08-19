import PalanceCard from "../../users/components/PalanceCard/PalanceCard";
import UserCard from "../../users/components/UserCard/UserCard";
import "./UsersActive.css";
import syria from "../../../assets/flag/syria.png";
import iraq from "../../../assets/flag/iraq.png";
import usa from "../../../assets/flag/USA.png";
import UserUnActive from "../../users/components/UserUnActive/UserUnActive";
const UsersActive = () => {
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
        <UserUnActive type="unactive" />
      </div>
    </>
  );
};

export default UsersActive;
