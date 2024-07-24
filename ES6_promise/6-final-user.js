import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName)
      .then((response) => ({ status: 'fulfilled', value: response }))
      .catch((err) => ({ status: 'rejected', value: err })),
    uploadPhoto(fileName)
      .then((response) => ({ status: 'fulfilled', value: response }))
      .catch((err) => ({ status: 'rejected', value: err })),
  ]).then((response) => response);
}
