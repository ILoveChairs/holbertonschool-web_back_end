import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};

  async function errorHandler() {
    const photo = await uploadPhoto().then((result) => result).catch(() => (null));
    const user = await createUser().then((result) => result).catch(() => (null));
    if (!photo || !user) {
      output.photo = null;
      output.user = null;
    } else {
      output.photo = photo;
      output.user = user;
    }
  }

  await errorHandler();

  return output;
}
