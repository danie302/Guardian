import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastname: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly priority: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly visible: boolean;
}
