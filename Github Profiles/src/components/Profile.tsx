import classes from "./Profile.module.css";
const Profile = (userProfile: any) => {
  const userData = userProfile.userProfile;
  return (
    <main>
      {userData && (
        <div className={classes.card}>
          <div>
            <img
              className={classes.avatar}
              src={userData.avatar_url}
              alt={userData.name}
            />
          </div>
          <div className={classes["user-info"]}>
            <h2>{userData.login}</h2>
            <p>{userData.bio}</p>

            <ul>
              <li>
                {userData.followers}
                <strong>Followers</strong>
              </li>
              <li>
                {userData.following}
                <strong>Following</strong>
              </li>
              <li>
                {userData.public_repos}
                <strong>Repos</strong>
              </li>
            </ul>
            <div className={classes.repos}></div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;
