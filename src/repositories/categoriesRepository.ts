import connection from "../config/db";

export async function findById(id: number) {
  return connection.category.findFirst({
    where: {
      id,
    },
  });
}