import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://danie302:Password123@ds229078.mlab.com:29078/guardian',
      { useCreateIndex: true, useFindAndModify: false },
    ),
    LocationModule,
    UserModule,
  ],
})
export class AppModule {}
