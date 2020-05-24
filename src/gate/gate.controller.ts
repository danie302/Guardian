import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { GateService } from './gate.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateGateDTO } from 'src/settings/dto/create-gate.dto';
import { UpdateGateDTO } from 'src/settings/dto/update-gate.dto';

@ApiBearerAuth()
@ApiTags('Gates')
@Controller('gate')
export class GateController {
  constructor(private gateService: GateService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create Gate' })
  create(@Body() createGateDTO: CreateGateDTO) {
    return this.gateService.create(createGateDTO);
  }

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get Gates' })
  async findAll() {
    return this.gateService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get Gate By ID' })
  async findById(@Param('id') id: string) {
    return this.gateService.findById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update Gate By ID' })
  updateById(@Body() updateUserDTO: UpdateGateDTO, @Param('id') id: string) {
    return this.gateService.updateById(id, updateUserDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete Gate By ID' })
  deleteById(@Param('id') id: string) {
    return this.gateService.deleteById(id);
  }

  @Patch('disable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Disable Gate By ID' })
  disableById(@Param('id') id: string) {
    return this.gateService.disableById(id);
  }

  @Patch('enable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Enable Gate By ID' })
  enableById(@Param('id') id: string) {
    return this.gateService.enableById(id);
  }
}
