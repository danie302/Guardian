import { IsNotEmpty, IsString, IsLatitude, IsLongitude } from 'class-validator';

export class CreateLocationDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsLatitude()
  readonly lat: number;

  @IsNotEmpty()
  @IsLongitude()
  readonly lng: number;
}
