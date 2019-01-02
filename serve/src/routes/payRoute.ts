import { getConnection } from "typeorm";
import { Remuneration } from "./../entity/Remuneration";
import { FacultyRemunerationMap } from "./../entity/FacultyRemunerationMap";
import { Request, Response, Application } from "express";
import { Faculty } from "../entity/Faculty";
import { CONNREFUSED } from "dns";
export default class PayRoutes {
  public static routes(app: Application): void {
    app
      .route("/pays")
      .get((req: Request, res: Response) => {
        PayC.allPay().then(pay => res.status(200).send(pay));
      })
      .post((req: Request, res: Response) => {
        PayC.addPay(req.body).then(pay => res.status(200).send());
      });
    app
      .route("/pay/:id")
      .get((req: Request, res: Response) => {
        PayC.onePay(req.params.id).then(pay => res.status(200).send(pay));
      })
      .put((req: Request, res: Response) => {
        PayC.updatePay(req.params.id, req.body).then(pays =>
          res.status(200).send(pays)
        );
      })
      .delete((req: Request, res: Response) => {
        PayC.deletePay(req.params.id).then(pay => res.status(200).send(pay));
      });
  }
}
class PayC {
  static async allPay() {
    const allPay = await FacultyRemunerationMap.find({
      relations: ["faculty", "remuneration"],
      where: { isActive: "true" }
    });
    return allPay;
  }
  static async addPay(pay) {
    const { noStudent, faculty, remuneration, year } = pay;
    const nFaculty = await Faculty.findOne({ id: faculty });
    const Reum = await Remuneration.findOne({ id: remuneration });
    const newPay = await FacultyRemunerationMap.create({
      noStudent,
      year: new Date(year),
      nFaculty,
      Reum
    });
    await newPay.save();
    return this.allPay();
  }
  static async onePay(id: string) {
    const onePay = await FacultyRemunerationMap.find({
      relations: ["faculty", "remuneration"],
      where: { id, isActive: "true" }
    });
    return onePay;
  }
  static async updatePay(id: string, pay) {
    const { noStudent, year, faculty, remuneration } = pay;
    const nFaculty = await Faculty.findOne({ id: faculty });
    const Reum = await Remuneration.findOne({ id: remuneration });
    const nYear = new Date(year);
    await getConnection()
      .createQueryBuilder()
      .update(FacultyRemunerationMap)
      .set({
        noStudent,
        year: nYear,
        faculty: nFaculty,
        remuneration: Reum
      })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allPay();
  }
  static async deletePay(id: string) {
    await getConnection()
      .createQueryBuilder()
      .update(FacultyRemunerationMap)
      .set({ isActive: "false" })
      .where("id=:id", { id })
      .execute()
      .catch(e => console.log(e));
    return this.allPay();
  }
}
