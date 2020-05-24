import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../settings/constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../settings/strategies/jwt.strategy';
import { LocalStrategy } from '../settings/strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { Module, forwardRef } from '@nestjs/common';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
