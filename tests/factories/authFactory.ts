import { faker } from "@faker-js/faker";

export function userFactory() {
  const email = faker.internet.email();
  const password = faker.internet.password();

  return {
    email,
    password,
  };
}

export function adminFactory() {
  const email = "jogoce@gmail.com"
  const password = "jogoce123"

  return {
    email,
    password,
  };
}