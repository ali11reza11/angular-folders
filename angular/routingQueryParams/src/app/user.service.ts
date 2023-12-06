import { Iuser } from "./interface/app-inrerface";

export class UserService {

  public users: Iuser[] = [
    {
      name: `ali`,
      id: 1,
      age: 18,
    },
    {
      name: `mamad`,
      id: 2,
      age: 16,
    },
    {
      name: `reza`,
      id: 3,
      age: 12,
    }
  ]

}
