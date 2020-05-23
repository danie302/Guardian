import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Module, forwardRef } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { LocationSchema } from '../settings/schemas/location.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Location', schema: LocationSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
