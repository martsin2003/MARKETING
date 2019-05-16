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
import { tblMoveInNow } from './tblMoveInNow';

@Entity('tblMoveInNowStatusLog', { schema: 'public' })
export class tblMoveInNowStatusLog {
  @ManyToOne(type => tblMoveInNow, tblMoveInNow => tblMoveInNow.tblMoveInNowStatusLogs, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMoveInNowStatusLogMoveInNowID' })
  intMoveInNowStatusLogMoveInNow: tblMoveInNow | null;

  @Column('text', {
    nullable: false,
    primary: true,
    name: 'varMoveInNowStatusLogStatusFrom'
  })
  varMoveInNowStatusLogStatusFrom: string;

  @Column('text', {
    nullable: false,
    primary: true,
    name: 'varMoveInNowStatusLogStatusTo'
  })
  varMoveInNowStatusLogStatusTo: string;

  @Column('timestamp with time zone', {
    nullable: false,
    primary: true,
    name: 'dteMoveInNowStatusLogStatusDate'
  })
  dteMoveInNowStatusLogStatusDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMoveInNowStatusLogDate'
  })
  dteMoveInNowStatusLogDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intMoveInNowStatusLogDays'
  })
  intMoveInNowStatusLogDays: number;
}
