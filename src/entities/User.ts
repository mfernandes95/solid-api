import { uuid } from 'uuidv4'

export class User {
  public readonly id: String;

  public name: String;
  public email: String;
  public password: String;

  constructor(props: Omit<User, 'id'>, id?: String) {
    Object.assign(this, props);

    if (!id) this.id = uuid();
  }

}