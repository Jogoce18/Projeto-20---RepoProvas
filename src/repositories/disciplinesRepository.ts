import connection from "../config/db";

export async function findByTeacherAndDiscipline(teacherId: number, disciplineId: number) {
  return connection.teacherDiscipline.findFirst({
    where: {
      teacherId,
      disciplineId,
    },
  });
}

export async function findByTeacher(teacherId: number) {
  return connection.teacherDiscipline.findMany({
    where: {
      teacherId,
    },
  });
}

export async function findDisciplines() {
  return connection.discipline.findMany();
}

export async function findTeachers() {
  return connection.teacher.findMany();
}