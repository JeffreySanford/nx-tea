import { IsInt, IsString } from 'class-validator';

export class CreateTeaDto {
@IsString()
  readonly id: number;

@IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;

  @IsInt()
  readonly cost: string;

  @IsInt()
  readonly orderQuantity: number;

  @IsString()
  readonly instructions?: string;
}