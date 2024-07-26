import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};

  function onError() {
    output.photo = {};
    output.user = {};
  }

  uploadPhoto().then((result) => {
    output.photo = result;
  }).catch(() => {
    onError();
    return output;
  });

  createUser().then((result) => {
    output.user = result;
  }).catch(() => {
    onError();
    return output;
  });

  return output;
}
