import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import IndexRoutes from "./routes/indexRoute";
import TestRoutes from "./routes/testRoute";
import UsersRoutes from "./routes/userRoute";
import RoleRoutes from "./routes/roleRoute";
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    IndexRoutes.routes(this.app);
    TestRoutes.routes(this.app);
    UsersRoutes.routes(this.app);
    RoleRoutes.routes(this.app);
    this.error();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private error(): void {
    this.app.use((req: Request, res: Response) => {
      res.status(404).send({
        msg: <string>`404 ${req.path} not fount`
      });
    });
  }
}
export default new App().app;
