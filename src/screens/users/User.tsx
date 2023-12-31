import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../dc";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User width id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet />
    </div>
  );
}

export default User;
