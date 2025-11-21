import 'reflect-metadata';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/**/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
