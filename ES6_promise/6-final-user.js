import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName).then((response) => response, (err) => err),
    uploadPhoto(fileName).then((response) => response, (err) => err),
  ]).then((response) => response);
}
