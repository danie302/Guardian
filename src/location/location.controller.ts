import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDTO } from '../settings/dto/create-location.dto';
import { ILocation } from '../settings/interfaces/location.interface';
import { UpdateLocationDTO } from 'src/settings/dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  create(@Body() createLocationDTO: CreateLocationDTO) {
    return this.locationService.create(createLocationDTO);
  }

  @Get()
  getDoors() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id): Promise<ILocation> {
    return this.locationService.findById(id);
  }

  @Patch(':id')
  updateById(@Body() updateLocationDTO: UpdateLocationDTO, @Param('id') id) {
    return this.locationService.updateById(id, updateLocationDTO);
  }

  @Delete(':id')
  deleteById(@Param('id') id) {
    return this.locationService.deleteById(id);
  }

  @Patch('disable/:id')
  disableById(@Param('id') id) {
    return this.locationService.disableById(id);
  }

  @Patch('enable/:id')
  enableById(@Param('id') id) {
    return this.locationService.enableById(id);
  }
}
