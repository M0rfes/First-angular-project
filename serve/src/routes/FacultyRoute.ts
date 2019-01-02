import { getConnection } from "typeorm";
import { Department } from "./../entity/Department";
import { Faculty } from "./../entity/Faculty";
import { Request, Response, Application } from "express";
export default class FacultyRoutes {
  public static routes(app: Application): void {
    app
      .route("/faculties")
      .get((req: Request, res: Response) => {
        FacultyC.allFaculties().then(fac => res.status(200).send(fac));
      })
      .post((req: Request, res: Response) => {
        FacultyC.addFaculty(req.body).then(fac => res.status(200).send(fac));
      });
    app
      .route("/faculty/:id")
      .get((req: Request, res: Response) => {
        FacultyC.onefaculty(req.params.id).then(fac =>
          res.status(200).send(fac)
        );
      })
      .put((req: Request, res: Response) => {
        FacultyC.updateFaculty(req.params.id, req.body).then(fac =>
          res.status(200).send(fac)
        );
      })
      .delete((req: Request, res: Response) => {
        FacultyC.deleteFaculty(req.params.id).then(fac =>
          res.status(200).send(fac)
        );
      });
  }
}
class FacultyC {
  static async allFaculties() {
    const allFaculties = await Faculty.find({
      relations: ["department", "remunerationpay"],
      where: { isActive: "true" }
    });
    return allFaculties;
  }
  static async addFaculty(faculty) {
    const { name, department } = faculty;
    const newDep = await Department.findOne({ id: department });
    const newfac = await Faculty.create({
      name,
      department: newDep
    });
    await newfac.save();
    return this.allFaculties();
  }
  static async onefaculty(id: string) {
    const faculty = await Faculty.find({
      relations: ["depatment", "remunerationpay"],
      where: { id, isActive: "true" }
    });
    return faculty;
  }
  static async updateFaculty(id: string, fac) {
    const { name, department } = fac;
    const newdepartment = Department.findOne({ id: department });
    await getConnection()
      .createQueryBuilder()
      .update(Faculty)
      .set({
        name,
        department: newdepartment
      })
      .execute()
      .catch(e => console.log(e));
    return this.allFaculties();
  }
  static async deleteFaculty(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Faculty)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allFaculties();
  }
}
