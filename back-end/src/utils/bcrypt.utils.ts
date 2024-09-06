import bcrypt from "bcrypt";

export class BcryptUtil {
  private SALT_ROUNDS = 10;

  async hashedPassword(password: string) {
    const hash = await bcrypt.hash(password, this.SALT_ROUNDS);
    return hash;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const compare = await bcrypt.compare(password, hash);
    return compare;
  }
}
