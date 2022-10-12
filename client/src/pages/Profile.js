import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log('User Email:', user);
// console.log('User Email:', user.email, 'UserSub:', user.sub);

  return (
    isAuthenticated && (
      <article className="column">
        {user?.picture && <img stc={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
