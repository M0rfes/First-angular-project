import { getConnection } from "typeorm";
import { Request, Response, Application } from "express";
import { Department } from "../entity/Department";
export default class DepartmentRoutes {
  public static routes(app: Application): void {
    app
      .route("/departments")
      .get((req: Request, res: Response) => {
        DepartmentC.allDepartments().then(dep => res.status(200).send(dep));
      })
      .post((req: Request, res: Response) => {
        DepartmentC.addDepartment(req.body.department).then(dep =>
          res.status(200).send(dep)
        );
      });
    app
      .route("/department/:id")
      .get((req: Request, res: Response) => {
        DepartmentC.oneDepartment(req.params.id).then(dep =>
          res.status(200).send(dep)
        );
      })
      .put((req: Request, res: Response) => {
        DepartmentC.updateDepartment(req.params.id, req.body.department).then(
          dep => res.status(200).send(dep)
        );
      })
      .delete((req: Request, res: Response) => {
        DepartmentC.deleteDepartment(req.params.id).then(dep =>
          res.status(200).send(dep)
        );
      });
  }
}
class DepartmentC {
  static async allDepartments() {
    const allDep = await Department.find({
      relations: ["faculties", "users"],
      where: { isActive: "true" }
    });
    return allDep;
  }
  static async addDepartment(department: string) {
    const newDep = await Department.create({
      department
    });
    await newDep.save();
    return this.allDepartments();
  }
  static async oneDepartment(id: string) {
    const department = await Department.find({
      relations: ["faculties", "users"],
      where: { id, isActive: "true" }
    });
    return department;
  }
  static async updateDepartment(id: string, department: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Department)
      .set({ department })
      .where("id=:id", { id })
      .execute()
      .then(e => console.log(e))
      .catch(e => console.log(e));
    return this.allDepartments();
  }
  static async deleteDepartment(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Department)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allDepartments();
  }
}
