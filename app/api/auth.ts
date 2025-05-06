import 'server-only';

import { notFound } from 'next/navigation';

import { toNormalizedUserEntry } from '@/utils/normalizeApiEntry';
import { UserAuthData } from '@/types/user';

async function getAllUsers() {
  const res = await fetch('https://fakestoreapi.com/users', {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Something went wrong while fetching all users');

  const rawData = await res.json();

  if (Array.isArray(rawData) && rawData.length !== 0) {
    const normalizedProducts = rawData.map((data) =>
      toNormalizedUserEntry(data),
    );

    return normalizedProducts;
  } else {
    notFound();
  }
}

async function getSingleUser(params: string) {
  const res = await fetch(`https://fakestoreapi.com/users/${params}`, {
    cache: 'force-cache',
  });

  if (!res.ok)
    throw new Error('Something went wrong while fetching a single user');

  const rawData = await res.json();

  const normalizedProducts = toNormalizedUserEntry(rawData);

  if (!normalizedProducts) {
    notFound();
  }

  return normalizedProducts;
}

async function login(userData: UserAuthData) {
  const res = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!res.ok)
    throw new Error(
      'Something went wrong while adding authenticating the user',
    );
}

async function addNewUser(data: UserAuthData) {
  const newUserData = {
    ...data,
    id: Math.random(),
  };

  const res = await fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    body: JSON.stringify(newUserData),
  });

  if (!res.ok) throw new Error('Something went wrong while adding a new user');
}

export const auth = {
  getAllUsers,
  getSingleUser,
  addNewUser,
  login,
};
