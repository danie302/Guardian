import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsLatitude, IsLongitude, IsOptional } from 'class-validator';

export class UpdateLocationDTO {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly name: string;

  @IsOptional()
  @IsLatitude()
  @ApiProperty()
  readonly lat: number;

  @IsOptional()
  @IsLongitude()
  @ApiProperty()
  readonly lng: number;
}
