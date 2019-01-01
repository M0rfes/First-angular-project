import { Department } from "../department/department";

export class Faculty {
  constructor(
    public FacName: string,
    public department: Department,
    public Id = Math.random()
  ) {}
}
