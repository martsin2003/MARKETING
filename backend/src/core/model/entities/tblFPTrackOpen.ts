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

@Entity('tblFPTrackOpen', { schema: 'public' })
export class tblFPTrackOpen {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPTrackOpenID'
  })
  intFPTrackOpenID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPTrackOpenPlanCID'
  })
  intFPTrackOpenPlanCID: number;

  @Column('integer', {
    nullable: false,
    name: 'intFPTrackOpenPlanMID'
  })
  intFPTrackOpenPlanMID: number;

  @Column('integer', {
    nullable: false,
    name: 'intFPTrackOpenPlanEID'
  })
  intFPTrackOpenPlanEID: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPTrackOpenPlanGenericsFlg'
  })
  bFPTrackOpenPlanGenericsFlg: boolean;

  @Column('text', {
    nullable: false,
    name: 'varFPTrackOpenType'
  })
  varFPTrackOpenType: string;

  @Column('text', {
    nullable: true,
    name: 'varFPTrackOpenReferrer'
  })
  varFPTrackOpenReferrer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPTrackOpenIPAddr'
  })
  varFPTrackOpenIPAddr: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPTrackOpenDate'
  })
  dteFPTrackOpenDate: Date;
}
