import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve) => {
    resolve([
      signUpUser(firstName, lastName).then((response) => response, (err) => err).resolve(),
      uploadPhoto(fileName).then((response) => response, (err) => err).resolve(),
    ]);
  }).then((response) => response)
    .catch((err) => err);
}
