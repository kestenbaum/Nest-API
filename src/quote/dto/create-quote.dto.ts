import { IsEmpty, IsString, Length } from 'class-validator';

export class createQuoteDto {
  @IsString({ message: 'Type must string' })
  id: string;

  @IsString({ message: 'Type must string' })
  @IsEmpty({ message: 'quote must no empty' })
  @Length(1, 100, {
    message:
      'must be longer than or equal to 100 characters and quote must be shorter than or equal to 1 characters',
  })
  quote: string;

  @IsString({ message: 'Type must string' })
  @IsEmpty({ message: 'author must no empty' })
  @Length(1, 20, {
    message:
      'must be longer than or equal to 20 characters and quote must be shorter than or equal to 1 characters',
  })
  author: string;
}
