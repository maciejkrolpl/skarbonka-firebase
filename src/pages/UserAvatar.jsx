import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserAvatar = ({ user }) => {

  if (user) {
    if (user.photoURL) {
      return <Avatar alt={user.name} src={user.photoURL} />;
    }
    return <Avatar>{user.displayName[0]}</Avatar>;
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
