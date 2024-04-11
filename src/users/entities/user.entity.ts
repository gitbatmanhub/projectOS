import {
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  Entity,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
