import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserAvatar = ({ user }) => {

  if (user) {
    if (user.photo) {
      return <Avatar alt={user.name} src={user.photo} />;
    }
    return <Avatar>{user.firstName[0]}</Avatar>;
  }

  return (
    <>
      <Avatar>
        <AccountCircleIcon fontSize="large"  />
      </Avatar>
    </>
  );
};

export default UserAvatar;
