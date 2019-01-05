import { getConnection } from "typeorm";
import { Department } from "./../entity/Department";
import { Faculty } from "./../entity/Faculty";
import { Request, Response, Application } from "express";
export default class FacultyRoutes {
  public static routes(app: Application): void {
    app
      .route("/faculties")
      .get((req: Request, res: Response) => {
        FacultyC.allFaculties().then(fac => res.status(200).json(fac));
      })
      .post((req: Request, res: Response) => {
        FacultyC.addFaculty(req.body).then(fac => res.status(200).json(fac));
      });
    app
      .route("/faculty/:id")
      .get((req: Request, res: Response) => {
        FacultyC.onefaculty(req.params.id).then(fac =>
          res.status(200).json(fac)
        );
      })
      .put((req: Request, res: Response) => {
        FacultyC.updateFaculty(req.params.id, req.body).then(fac =>
          res.status(200).json(fac)
        );
      })
      .delete((req: Request, res: Response) => {
        FacultyC.deleteFaculty(req.params.id).then(fac =>
          res.status(200).json(fac)
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
    const { name, departmentId } = faculty;
    const newDep = await Department.findOne({ id: departmentId });
    const newfac = await Faculty.create({
      name,
      department: newDep
    });
    await newfac.save();
    return await this.allFaculties();
  }
  static async onefaculty(id: string) {
    const faculty = await Faculty.find({
      relations: ["department", "remunerationpay"],
      where: { id, isActive: "true" }
    });
    return faculty;
  }
  static async updateFaculty(id: string, fac) {
    console.log(fac);
    const { name, departmentId } = fac;
    const newdepartment = await Department.findOne({ id: departmentId });
    console.log(newdepartment);
    await getConnection()
      .createQueryBuilder()
      .update(Faculty)
      .set({
        name,
        department: newdepartment
      })
      .execute()
      .catch(e => console.log(e));
    return await this.allFaculties();
  }
  static async deleteFaculty(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Faculty)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return await this.allFaculties();
  }
}
