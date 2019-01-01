import { Request, Response, Application } from "express";
export default class TestRoutes {
  public static routes(app: Application): void {
    app
      .route("/test")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          hello: <string>"hii"
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          post: <string>"hell"
        });
      });
  }
}
