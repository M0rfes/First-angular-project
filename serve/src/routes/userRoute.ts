import { User } from "../entity/User";
import { Request, Response, Application } from "express";
import { Repository } from "typeorm";

export default class UsersRoutes {
  public static routes(app: Application): void {
    app
      .route("/Users")
      .get((req: Request, res: Response) => {
        res.status(200).send(UserC.allUsers().then(u => u));
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          post: <string>"hell"
        });
      });
  }
}

class UserC {
  static async allUsers(): Promise<User[]> {
    const allUsers = await User.find({ relations: ["department", "role"] });
    return allUsers;
  }
}
