import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly priority: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  readonly visible: boolean;
}
