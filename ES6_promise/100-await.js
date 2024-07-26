import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};
  uploadPhoto().then((result) => {
    output.photo = result;
  }).catch(() => {
    output.photo = {};
  });
  createUser().then((result) => {
    output.user = result;
  }).catch(() => {
    output.user = {};
  });
  return output;
}
