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

@Entity('tblMyTimeAcceptTerms', { schema: 'public' })
export class tblMyTimeAcceptTerms {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMyTimeAcceptTermsID'
  })
  intMyTimeAcceptTermsID: string;

  @Column('text', {
    nullable: false,
    name: 'varMyTimeAcceptTermsFirstName'
  })
  varMyTimeAcceptTermsFirstName: string;

  @Column('text', {
    nullable: false,
    name: 'varMyTimeAcceptTermsLastName'
  })
  varMyTimeAcceptTermsLastName: string;

  @Column('text', {
    nullable: false,
    name: 'varMyTimeAcceptTermsEmail'
  })
  varMyTimeAcceptTermsEmail: string;

  @ManyToOne(type => tblMoveInNow, tblMoveInNow => tblMoveInNow.tblMyTimeAcceptTermss, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMyTimeAcceptTermsMoveInNowID' })
  intMyTimeAcceptTermsMoveInNow: tblMoveInNow | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMyTimeAcceptTermsCreatedDate'
  })
  dteMyTimeAcceptTermsCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMyTimeAcceptTermsModifiedDate'
  })
  dteMyTimeAcceptTermsModifiedDate: Date;
}
