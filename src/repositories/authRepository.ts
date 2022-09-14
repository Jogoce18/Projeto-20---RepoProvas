import connection from "../config/db";

import { userType } from "../services/authService";

export async function search(param: string, value: string | number) {
  return connection.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: userType) {
  return connection.user.create({
    data: {
      ...user,
    },
  });
}