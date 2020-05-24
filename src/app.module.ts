import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationModule } from './location/location.module';
import { GateModule } from './gate/gate.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://danie302:Password123@ds229078.mlab.com:29078/guardian',
      { useCreateIndex: true, useFindAndModify: false },
    ),
    UserModule,
    AuthModule,
    GateModule,
    LocationModule,
  ],
})
export class AppModule {}
