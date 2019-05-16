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

@Entity('tblFPTrackOpenSaved', { schema: 'public' })
export class tblFPTrackOpenSaved {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPTrackOpenSavedID'
  })
  intFPTrackOpenSavedID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPTrackOpenSavedIntFPUserSavedFloorplanID'
  })
  intFPTrackOpenSavedIntFPUserSavedFloorplanID: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPTrackOpenSavedOpenedByCreator'
  })
  bFPTrackOpenSavedOpenedByCreator: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPTrackOpenSavedDate'
  })
  dteFPTrackOpenSavedDate: Date;
}
