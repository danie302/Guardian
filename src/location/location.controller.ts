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
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateLocationDTO } from '../settings/dto/create-location.dto';
import { ILocation } from '../settings/interfaces/location.interface';
import { UpdateLocationDTO } from 'src/settings/dto/update-location.dto';

@ApiBearerAuth()
@ApiTags('Locations')
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create Location' })
  create(@Body() createLocationDTO: CreateLocationDTO) {
    return this.locationService.create(createLocationDTO);
  }
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get Locations' })
  getDoors() {
    return this.locationService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get Location By ID' })
  findById(@Param('id') id): Promise<ILocation> {
    return this.locationService.findById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update Location By ID' })
  updateById(@Body() updateLocationDTO: UpdateLocationDTO, @Param('id') id) {
    return this.locationService.updateById(id, updateLocationDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete Location By ID' })
  deleteById(@Param('id') id) {
    return this.locationService.deleteById(id);
  }

  @Patch('disable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Disable Location By ID' })
  disableById(@Param('id') id) {
    return this.locationService.disableById(id);
  }

  @Patch('enable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Enable Location By ID' })
  enableById(@Param('id') id) {
    return this.locationService.enableById(id);
  }
}
