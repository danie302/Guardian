import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsLatitude, IsLongitude } from 'class-validator';

export class CreateLocationDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsLatitude()
  @ApiProperty()
  readonly lat: number;

  @IsNotEmpty()
  @IsLongitude()
  @ApiProperty()
  readonly lng: number;
}
