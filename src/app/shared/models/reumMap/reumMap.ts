import { Remuneration } from "./../remuneration/remuneration";
import { Faculty } from "./../faculty/faculty";
export class ReumMap {
  id: number;
  constructor(
    public faculty: Faculty,
    public remuneration: Remuneration,
    public Students: number,
    public year: Date
  ) {}
}
