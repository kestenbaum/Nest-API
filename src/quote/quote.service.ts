import { Injectable } from '@nestjs/common';
import { createQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuoteRepository } from './quote.repository';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}

  create(createQuoteDto: createQuoteDto): Promise<createQuoteDto> {
    return this.quoteRepository.create(createQuoteDto);
  }

  findAll(): Promise<createQuoteDto[]> {
    return this.quoteRepository.findAll();
  }

  findOne(id: string): Promise<createQuoteDto | null> {
    return this.quoteRepository.findById(id);
  }

  update(
    id: string,
    updateQuoteDto: UpdateQuoteDto,
  ): Promise<UpdateQuoteDto | null> {
    return this.quoteRepository.update(id, updateQuoteDto);
  }

  remove(id: string) {
    return this.quoteRepository.delete(id);
  }
}
