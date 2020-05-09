import { IsString, IsLatitude, IsLongitude, IsOptional } from 'class-validator';

export class UpdateLocationDTO {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsLatitude()
  readonly lat: number;

  @IsOptional()
  @IsLongitude()
  readonly lng: number;
}
