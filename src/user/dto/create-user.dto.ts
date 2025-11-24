import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'ID must be a string' })
  @Length(1, 36, { message: 'ID must be between 1 and 36 characters' })
  id: string;

  @ApiProperty()
  @IsString({ message: 'Name must be a string' })
  @Length(1, 100, { message: 'Name must be between 1 and 100 characters' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Email must be a string' })
  @Length(5, 100, { message: 'Email must be between 5 and 100 characters' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Password must be a string' })
  @Length(6, 100, { message: 'Password must be between 6 and 100 characters' })
  password: string;
}
