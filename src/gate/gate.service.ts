import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IGate } from 'src/settings/interfaces/gate.interface';
import { CreateGateDTO } from 'src/settings/dto/create-gate.dto';
import { UpdateGateDTO } from 'src/settings/dto/update-gate.dto';

@Injectable()
export class GateService {
  constructor(@InjectModel('Gate') private gateModel: Model<IGate>) {}

  async create(createGateDto: CreateGateDTO): Promise<IGate> {
    let createdGate = new this.gateModel(createGateDto);
    return await createdGate.save();
  }

  async findAll(): Promise<IGate[]> {
    return this.gateModel.find().lean();
  }

  async findById(id: string): Promise<IGate> {
    return this.gateModel.findById(id).lean();
  }

  async updateById(gateId: string, newGateData: UpdateGateDTO): Promise<IGate> {
    return this.gateModel.findByIdAndUpdate(gateId, newGateData).lean();
  }

  async deleteById(gateId: string): Promise<IGate> {
    const deletedGate = {
      name: '',
      visible: false,
    };
    return this.gateModel
      .findOneAndUpdate({ _id: gateId, visible: true }, deletedGate)
      .lean();
  }

  async disableById(gateId: string): Promise<IGate> {
    const disableGate = {
      active: false,
    };
    return this.gateModel
      .findOneAndUpdate({ _id: gateId, active: true }, disableGate)
      .lean();
  }

  async enableById(gateId: string): Promise<IGate> {
    const enableGate = {
      active: true,
    };
    return this.gateModel
      .findOneAndUpdate({ _id: gateId, active: false }, enableGate)
      .lean();
  }
}
