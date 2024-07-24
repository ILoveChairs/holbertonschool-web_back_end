import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  const resolvedPromised = [];
  for (const func of promises) {
    resolvedPromised.push(func.then(
      (response) => ({ status: response.status, value: response.value }),
      (err) => err,
    ));
  }
  return new Promise((resolve) => {
    resolve(resolvedPromised);
  }).then((response) => response)
    .catch((err) => err);
}
