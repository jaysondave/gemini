import {
  setItem,
  findItem,
  removeItem,
  removeAllItems,
} from './storage';

const storageId = 'authUser';
export const setStorage = (authUser) => {
  const { isRemember } = authUser;
  setItem(storageId, authUser, isRemember);
  removeItem(storageId, !isRemember);
};

export const getStorage = (key) => (
  findItem(key)
);

export const emptyStorage = () => (
  removeAllItems(storageId)
);

export default {
  setStorage,
  getStorage,
  emptyStorage,
};
