import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.typeOrmRepository.find();
  }

  async findId(id: string): Promise<User | null> {
    return this.typeOrmRepository.findOne({ where: { id: id } });
  }

  async findEmail(email: string): Promise<User | null> {
    return this.typeOrmRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password'],
    });
  }

  async create(userData: Partial<User>): Promise<User> {
    if (!userData.password) {
      throw new Error('Password is required.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(userData.password, salt);

    const user = this.typeOrmRepository.create({
      ...userData,
      password: hashed,
    });

    return this.typeOrmRepository.save(user);
  }

  async update(id: string, userData: Partial<User>) {
    const existingUser = await this.typeOrmRepository.findOne({
      where: { id: id },
    });

    if (!existingUser) return null;

    Object.assign(existingUser, userData);

    return this.typeOrmRepository.save(existingUser);
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }
}
