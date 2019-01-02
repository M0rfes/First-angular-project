import { getConnection } from "typeorm";
import { Request, Response, Application } from "express";
import { Remuneration } from "./../entity/Remuneration";
export default class RemunerationRoutes {
  public static routes(app: Application): void {
    app
      .route("/remunerations")
      .get((req: Request, res: Response) => {
        RemunerationC.allRemunerations().then(reum =>
          res.status(200).send(reum)
        );
      })
      .post((req: Request, res: Response) => {
        const { type, amount, date } = req.body;
        RemunerationC.addReumneration(type, +amount, date).then(reum =>
          res.status(200).send(reum)
        );
      });
    app
      .route("/remuneration/:id")
      .get((req: Request, res: Response) => {
        RemunerationC.oneRemuneration(req.params.id).then(reum =>
          res.status(200).send(reum)
        );
      })
      .put((req: Request, res: Response) => {
        RemunerationC.updateReumneration(req.params.id, req.body).then(reum =>
          res.status(200).send(reum)
        );
      })
      .delete((req: Request, res: Response) => {
        RemunerationC.deleteRemuneration(req.params.id).then(reum =>
          res.status(200).send(reum)
        );
      });
  }
}
class RemunerationC {
  static async allRemunerations() {
    const allReum = await Remuneration.find({
      relations: ["facultypay"],
      where: { isActive: "true" }
    });
    return allReum;
  }
  static async addReumneration(type: string, amount: number, date: string) {
    const newReum = await Remuneration.create({
      type,
      amount,
      date: new Date(date)
    });
    await newReum.save();
    return this.allRemunerations();
  }
  static async oneRemuneration(id: string) {
    const reum = await Remuneration.find({
      relations: ["facultypay"],
      where: { id, isActive: "true" }
    });
    return reum;
  }
  static async updateReumneration(id: string, newReum: Remuneration) {
    const { type, amount, date } = newReum;
    const ndate = new Date(date);
    await getConnection()
      .createQueryBuilder()
      .update(Remuneration)
      .set({ type, amount, date: ndate })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allRemunerations();
  }
  static async deleteRemuneration(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(Remuneration)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allRemunerations();
  }
}
