import { getConnection } from "typeorm";
import { Role } from "./../entity/Role";
import { Department } from "./../entity/Department";
import { User } from "../entity/User";
import { Request, Response, Application } from "express";
import * as bycript from "bcryptjs";

export default class UsersRoutes {
  public static routes(app: Application): void {
    app
      .route("/users")
      .get((req: Request, res: Response) => {
        UserC.allUsers().then(users => res.status(200).send(users));
      })
      .post((req: Request, res: Response) => {
        UserC.addUser(req.body).then(user => res.status(200).send(user));
      });
    app
      .route("/user/:id")
      .get((req: Request, res: Response) => {
        UserC.oneUser(req.params.id).then(user => res.status(200).send(user));
      })
      .put((req: Request, res: Response) => {
        UserC.updateUser(req.params.id, req.body).then(user =>
          res.status(200).send(user)
        );
      })
      .delete((req: Request, res: Response) => {
        UserC.deleteUser(req.params.id).then(users =>
          res.status(200).send(users)
        );
      });
  }
}

class UserC {
  static async allUsers(): Promise<User[]> {
    const allUsers = await User.find({
      relations: ["department", "role"],
      where: { isActive: "true" }
    });
    return allUsers;
  }
  static async addUser(user) {
    const {
      fname,
      lname,
      uname,
      email,
      phone,
      password,
      dob,
      department,
      role
    } = user;
    const nDep = await Department.findOne({ id: department });
    const nRole = await Role.findOne({ id: role });
    const hasedpass = await bycript.hash(password, 10);
    const newUser = User.create({
      fname,
      lname,
      uname,
      email,
      password: hasedpass,
      phone,
      dob: new Date(dob),
      department: nDep,
      role: nRole
    });
    await newUser.save();
    return this.allUsers();
  }
  static async oneUser(id: string) {
    const user = await User.find({
      relations: ["department", "role"],
      where: { id, isActive: "true" }
    });
    return user;
  }
  static async updateUser(id: string, user) {
    const {
      fname,
      lname,
      uname,
      email,
      phone,
      password,
      dob,
      department,
      role
    } = user;
    const nDep = await Department.findOne({ id: department });
    const nRole = await Role.findOne({ id: role });
    const ndob = new Date(dob);
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        fname,
        lname,
        uname,
        email,
        phone,
        password,
        dob: ndob,
        department: nDep,
        role: nRole
      })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allUsers();
  }
  static async deleteUser(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allUsers;
  }
}
