import * as bcrypt from 'bcrypt';

export default class Password {
  constructor(private _bycrpt?) {
    this._bycrpt = bcrypt;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await this._bycrpt.genSalt();

    const pwd = await this._bycrpt.hash(password, salt);

    return pwd;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await this._bycrpt.compare(password, hash);
  }
}
