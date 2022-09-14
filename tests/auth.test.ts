import supertest from "supertest";
import app from "../src/app";
import connection from "../src/config/db";
import * as userFactory from "./factories/authFactory";


afterAll(async () => {
  await connection.$executeRaw`TRUNCATE TABLE users;`;
 
});

describe("POST /sign-up", () => {
  it("Create a account sucess 201", async () => {
    const user = userFactory.userFactory();

    const body = { ...user, confirmPassword: user.password };
    const result = await supertest(app).post("/sign-up").send(body);
    
    expect(result.status).toBe(201);

    const checkUser = connection.$executeRaw`SELECT * FROM users WHERE email = '${user.email}'`;
    expect(checkUser).toBeTruthy();
  });

  it("Create a account already exists 409", async () => {
    const body = { ...userFactory.adminFactory(), confirmPassword: "jogoce123" };

    await supertest(app).post("/sign-up").send(body);
    const result = await supertest(app).post("/sign-up").send(body);

    const status = result.status;
    expect(status).toBe(409);
  });
});

describe("POST /sign-in", () => {
  it("Login sucess 200", async () => {
    const user = userFactory.userFactory();
    const body = { ...user, confirmPassword: user.password };

    await supertest(app).post("/sign-up").send(body);
    const result = await supertest(app).post("/sign-in").send({ ...user });

    expect(result.status).toBe(200);
    expect(result.body).toHaveProperty("token");
  });

  it("Login wrong credentials 401", async () => {
    const user = userFactory.adminFactory();
    const result = await supertest(app).post("/sign-in").send({ ...user, password: "wrongpass" });

    const status = result.status;
    expect(status).toBe(401);
  });

});
