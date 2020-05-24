import { Module } from '@nestjs/common';
import { GateService } from './gate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GateController } from './gate.controller';
import { GateSchema } from 'src/settings/schemas/gates.schemas';

@Module({
  providers: [GateService],
  controllers: [GateController],
  imports: [MongooseModule.forFeature([{ name: 'Gate', schema: GateSchema }])],
})
export class GateModule {}
