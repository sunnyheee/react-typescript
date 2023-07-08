import { useParams } from "react-router-dom";
import { users } from "../../dc";

function User() {
  const { userId } = useParams();
  return (
    <h1>
      User width id {userId} is named: {users[Number(userId) - 1].name}
    </h1>
  );
}

export default User;
