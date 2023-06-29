import { uploadPhoto, createUser } from './utils';

function asyncUploadUser() {
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (_) {
    return { photo: null, user: null };
  }
}

export default async asyncUploadUser;
