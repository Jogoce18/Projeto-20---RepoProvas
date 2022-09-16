import { faker } from "@faker-js/faker";
import connection from "../../src/config/db";

export async function testFactory(testValid: boolean = false) {
  const name = faker.lorem.words(3);
  const pdfUrl = faker.internet.url();
  let categoryId = 0;
  let teacherId = 0;
  let disciplineId = 0;

  if(testValid){
    const category = await connection.category.findFirst({ where: { name: "Projeto" } });
    categoryId = category.id;

    const teacher = await getTeacher();
    teacherId = teacher.id;

    const discipline = await getDiscipline();
    disciplineId = discipline.id;
  }

  return { name, pdfUrl, categoryId, teacherId, disciplineId };
}

export async function getTeacher() {
  return await connection.teacher.findFirst({ where: { name: "Diego Pinho" } });
}

export async function getDiscipline() {
  return await connection.discipline.findFirst({ where: { name: "JavaScript" } });
}
