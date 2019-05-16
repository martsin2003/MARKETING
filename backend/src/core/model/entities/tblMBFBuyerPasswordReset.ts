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
import { tblMBFBuyer } from './tblMBFBuyer';

@Entity('tblMBFBuyerPasswordReset', { schema: 'public' })
export class tblMBFBuyerPasswordReset {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFBuyerPasswordResetID'
  })
  intMBFBuyerPasswordResetID: string;

  @ManyToOne(type => tblMBFBuyer, tblMBFBuyer => tblMBFBuyer.tblMbfBuyerPasswordResets, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFBuyerPasswordResetMBFBuyerID' })
  intMbfBuyerPasswordResetMbfBuyer: tblMBFBuyer | null;

  @Column('text', {
    nullable: false,
    name: 'varMBFBuyerPasswordResetCode'
  })
  varMBFBuyerPasswordResetCode: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFBuyerPasswordResetCodeExp'
  })
  dteMBFBuyerPasswordResetCodeExp: Date;
}
