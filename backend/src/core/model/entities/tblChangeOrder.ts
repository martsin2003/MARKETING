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
import { tblChangeOrderDetail } from './tblChangeOrderDetail';
import { tblChangeOrderSnapshot } from './tblChangeOrderSnapshot';

@Entity('tblChangeOrder', { schema: 'public' })
export class tblChangeOrder {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intChangeOrderID'
  })
  intChangeOrderID: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteChangeOrderCreatedDate'
  })
  dteChangeOrderCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteChangeOrderModifiedDate'
  })
  dteChangeOrderModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intChangeOrderCreatedBy'
  })
  intChangeOrderCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intChangeOrderModifiedBy'
  })
  intChangeOrderModifiedBy: number | null;

  @Column('text', {
    nullable: true,
    name: 'varChangeOrderTitle'
  })
  varChangeOrderTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varChangeOrderNotes'
  })
  varChangeOrderNotes: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intChangeOrderIncrement'
  })
  intChangeOrderIncrement: number;

  @Column('text', {
    nullable: true,
    name: 'varChangeOrderNotesShrt'
  })
  varChangeOrderNotesShrt: string | null;

  @OneToMany(
    type => tblChangeOrderDetail,
    tblChangeOrderDetail => tblChangeOrderDetail.intChangeOrderDetailChangeOrder,
    { onDelete: 'CASCADE' }
  )
  tblChangeOrderDetails: tblChangeOrderDetail[];

  @OneToMany(
    type => tblChangeOrderSnapshot,
    tblChangeOrderSnapshot => tblChangeOrderSnapshot.intChangeOrderSnapshotChangeOrder
  )
  tblChangeOrderSnapshots: tblChangeOrderSnapshot[];
}
