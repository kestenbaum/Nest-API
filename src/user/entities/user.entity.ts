import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ select: false })
  password: string;
}
