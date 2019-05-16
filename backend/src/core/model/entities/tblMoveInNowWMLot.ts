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
import { tblWMLot } from './tblWMLot';

@Entity('tblMoveInNowWMLot', { schema: 'public' })
export class tblMoveInNowWMLot {
  @ManyToOne(type => tblMoveInNow, tblMoveInNow => tblMoveInNow.tblMoveInNowWmLots, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMoveInNowWMLotMoveInNowID' })
  intMoveInNowWmLotMoveInNow: tblMoveInNow | null;

  @ManyToOne(type => tblWMLot, tblWMLot => tblWMLot.tblMoveInNowWmLots, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMoveInNowWMLotWMLotID' })
  intMoveInNowWmLotWmLot: tblWMLot | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMoveInNowWMLotCreatedDate'
  })
  dteMoveInNowWMLotCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMoveInNowWMLotModifiedDate'
  })
  dteMoveInNowWMLotModifiedDate: Date;
}
