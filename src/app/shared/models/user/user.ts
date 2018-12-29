import { Role } from "../role/role";
import { Department } from "../department/department";

export class User {
  public usserId: number;
  constructor(
    public Fname: string,
    public Lname: String,
    public Uname: String,
    public Email: String,
    public Phone: number,
    public birth: Date,
    public role: Role,
    public department: Department,
    public password: string
  ) {}
}
