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
import { tblEmailMarketingSent } from './tblEmailMarketingSent';

@Entity('tblEmailMarketingSentTargetCRM', { schema: 'public' })
export class tblEmailMarketingSentTargetCRM {
  @ManyToOne(
    type => tblEmailMarketingSent,
    tblEmailMarketingSent => tblEmailMarketingSent.tblEmailMarketingSentTargetCrms,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intEmailMarketingSentTargetCRMEmailMarketingSentID' })
  intEmailMarketingSentTargetCrmEmailMarketingSent: tblEmailMarketingSent | null;

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'intEmailMarketingSentTargetCRMCRMID'
  })
  intEmailMarketingSentTargetCRMCRMID: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEmailMarketingSentTargetCRMCreatedDate'
  })
  dteEmailMarketingSentTargetCRMCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEmailMarketingSentTargetCRMModifiedDate'
  })
  dteEmailMarketingSentTargetCRMModifiedDate: Date;
}
