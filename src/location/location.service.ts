import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ILocation } from '../settings/interfaces/location.interface';
import { CreateLocationDTO } from '../settings/dto/create-location.dto';
import { UpdateLocationDTO } from 'src/settings/dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel('Location') private locationModel: Model<ILocation>,
  ) {}

  async create(createLocationDTO: CreateLocationDTO): Promise<ILocation> {
    const createdLocation = new this.locationModel(createLocationDTO);
    return createdLocation.save();
  }

  async findAll(): Promise<ILocation[]> {
    return this.locationModel
      .find({ active: true, visible: true })
      .select('name lat lng')
      .lean();
  }

  async findById(locationId: string): Promise<ILocation> {
    return this.locationModel
      .findOne({
        _id: locationId,
        active: true,
        visible: true,
      })
      .select('name lat lng')
      .lean();
  }

  async updateById(
    locationId: string,
    newLocationData: UpdateLocationDTO,
  ): Promise<ILocation> {
    return this.locationModel
      .findByIdAndUpdate(locationId, newLocationData)
      .lean();
  }

  async deleteById(locationId: string): Promise<ILocation> {
    const deletedLocation = {
      name: '',
      visible: false,
    };
    return this.locationModel
      .findOneAndUpdate({ _id: locationId, visible: true }, deletedLocation)
      .lean();
  }

  async disableById(locationId: string): Promise<ILocation> {
    const disableLocation = {
      active: false,
    };

    return this.locationModel
      .findOneAndUpdate({ _id: locationId, active: true }, disableLocation)
      .lean();
  }

  async enableById(locationId: string): Promise<ILocation> {
    const enableLocation = {
      active: true,
    };
    return this.locationModel
      .findOneAndUpdate({ _id: locationId, active: false }, enableLocation)
      .lean();
  }
}
