import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};

  async function errorHandler() {
    const photo = await uploadPhoto().then((result) => result).catch(() => ({}));
    const user = await createUser().then((result) => result).catch(() => ({}));
    if (!photo || !user) {
      output.photo = {};
      output.user = {};
    } else {
      output.photo = photo;
      output.user = user;
    }
  }

  await errorHandler();

  return output;
}
