import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';

@Entity('tblTaskStatus', { schema: 'public' })
export class tblTaskStatus {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTaskStatus'
  })
  intTaskStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varTaskStatus'
  })
  varTaskStatus: string | null;
}
