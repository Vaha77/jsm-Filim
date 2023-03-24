import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Fratures/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  console.log(user, 'Profile');

  return (
    <div>
      Profile
    </div>
  );
};

export default Profile;
