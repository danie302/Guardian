import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { IUserJWT } from 'src/settings/interfaces/jwtUser';
import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<IUserJWT> {
    let user = await this.userService.findOne(username);
    let equalPassword = compareSync(password, user.password);
    if (user && equalPassword) {
      let { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: IUserJWT) {
    const payload = { _id: user._id, priority: user.priority };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
