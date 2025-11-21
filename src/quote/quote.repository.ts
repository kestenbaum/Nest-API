import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';

export class QuoteRepository {
  constructor(
    @InjectRepository(Quote)
    private readonly typeOrmRepository: Repository<Quote>,
  ) {}

  async findAll(): Promise<Quote[]> {
    return this.typeOrmRepository.find();
  }

  async findById(id: string): Promise<Quote | null> {
    return this.typeOrmRepository.findOneBy({ id });
  }

  async create(quoteData: Partial<Quote>): Promise<Quote> {
    const quote = this.typeOrmRepository.create(quoteData);
    return this.typeOrmRepository.save(quote);
  }

  async update(id: string, quoteData: Partial<Quote>): Promise<Quote | null> {
    const existingQuote = await this.typeOrmRepository.findOne({
      where: { id: id },
    });

    if (!existingQuote) return null;

    Object.assign(existingQuote, quoteData);

    return this.typeOrmRepository.save(existingQuote);
  }

  async delete(id: string) {
    await this.typeOrmRepository.delete(id);
  }
}
