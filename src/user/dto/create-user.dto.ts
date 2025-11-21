import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'ID must be a string' })
  @Length(1, 36, { message: 'ID must be between 1 and 36 characters' })
  id: string;

  @IsString({ message: 'Name must be a string' })
  @Length(1, 100, { message: 'Name must be between 1 and 100 characters' })
  name: string;

  @IsString({ message: 'Email must be a string' })
  @Length(5, 100, { message: 'Email must be between 5 and 100 characters' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @Length(6, 100, { message: 'Password must be between 6 and 100 characters' })
  password: string;
}
