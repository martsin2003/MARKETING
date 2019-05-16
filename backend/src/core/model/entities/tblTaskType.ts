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
import { tblTaskStandard } from './tblTaskStandard';

@Entity('tblTaskType', { schema: 'public' })
export class tblTaskType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTaskTypeID'
  })
  intTaskTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varTaskType'
  })
  varTaskType: string | null;

  @OneToMany(type => tblTaskStandard, tblTaskStandard => tblTaskStandard.intTaskTaskType, {
    onDelete: 'CASCADE'
  })
  tblTaskStandards: tblTaskStandard[];
}
