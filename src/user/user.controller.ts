import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Inject,
  forwardRef,
  Param,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/settings/dto/create-user.dto';
import { UpdateUserDTO } from 'src/settings/dto/update-user.dto';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: 'Login' })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get Users' })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get User By ID' })
  async findById(@Param('id') id) {
    return this.userService.findById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update User By ID' })
  updateById(@Body() updateUserDTO: UpdateUserDTO, @Param('id') id) {
    return this.userService.updateById(id, updateUserDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete User By ID' })
  deleteById(@Param('id') id) {
    return this.userService.deleteById(id);
  }

  @Patch('disable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Disable User By ID' })
  disableById(@Param('id') id) {
    return this.userService.disableById(id);
  }

  @Patch('enable/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Enable User By ID' })
  enableById(@Param('id') id) {
    return this.userService.enableById(id);
  }
}
