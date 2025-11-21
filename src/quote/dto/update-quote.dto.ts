import { PartialType } from '@nestjs/mapped-types';
import { createQuoteDto } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(createQuoteDto) {}
