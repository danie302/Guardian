import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocationService } from './location.service';
import { CreateLocationDTO } from '../settings/dto/create-location.dto';
import { ILocation } from '../settings/interfaces/location.interface';
import { UpdateLocationDTO } from 'src/settings/dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createLocationDTO: CreateLocationDTO) {
    return this.locationService.create(createLocationDTO);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getDoors() {
    return this.locationService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findById(@Param('id') id): Promise<ILocation> {
    return this.locationService.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  updateById(@Body() updateLocationDTO: UpdateLocationDTO, @Param('id') id) {
    return this.locationService.updateById(id, updateLocationDTO);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteById(@Param('id') id) {
    return this.locationService.deleteById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('disable/:id')
  disableById(@Param('id') id) {
    return this.locationService.disableById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('enable/:id')
  enableById(@Param('id') id) {
    return this.locationService.enableById(id);
  }
}
