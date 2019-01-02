import { Role } from "./../entity/Role";
import { Request, Response, Application } from "express";
import { getConnection } from "typeorm";
export default class RoleRoutes {
  public static routes(app: Application): void {
    app
      .route("/roles")
      .get((req: Request, res: Response) => {
        RoleC.allRoles().then(roles => res.status(200).send(roles));
      })
      .post((req: Request, res: Response) => {
        RoleC.addRole(req.body.roleName).then(r => res.status(200).send(r));
      });
    app
      .route("/role/:id")
      .get((req: Request, res: Response) => {
        RoleC.oneRole(req.params.id).then(r => res.status(200).send(r));
      })
      .put((req: Request, res: Response) => {
        RoleC.updateRole(req.params.id, req.body.role).then(r =>
          res.status(200).send(r)
        );
      })
      .delete((req: Request, res: Response) => {
        RoleC.deleteRole(req.params.id).then(roles =>
          res.status(200).send(roles)
        );
      });
  }
}
class RoleC {
  static async allRoles() {
    const allRoles = await Role.find({
      relations: ["users"],
      where: { isActive: "true" }
    });
    return allRoles;
  }
  static async addRole(roleName: string) {
    const newRole = await Role.create({
      roleName
    });
    await newRole.save();
    return this.allRoles();
  }
  static async oneRole(id: string) {
    const role = await Role.findOne({
      relations: ["users"],
      where: { id, isActive: "true" }
    });
    return role;
  }
  static async updateRole(id: string, roleName: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Role)
      .set({ roleName })
      .where("id =:id", { id })
      .execute()
      .then(e => console.log(e))
      .catch(e => console.log(e));
    return this.allRoles();
  }
  static async deleteRole(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Role)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allRoles();
  }
}
