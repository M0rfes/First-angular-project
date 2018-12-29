import { Department } from "../department/department";

export class Faculty {
  public FacID: number;
  constructor(public FacName: string, public department: Department) {}
}
