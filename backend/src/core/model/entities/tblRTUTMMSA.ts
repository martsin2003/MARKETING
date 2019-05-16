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

@Entity('tblRTUTMMSA', { schema: 'public' })
export class tblRTUTMMSA {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTUTMMSAID'
  })
  intRTUTMMSAID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTUTMMSAName'
  })
  varRTUTMMSAName: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTUTMMSAStatus'
  })
  varRTUTMMSAStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTUTMMSACreatedDate'
  })
  dteRTUTMMSACreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTUTMMSAModifiedDate'
  })
  dteRTUTMMSAModifiedDate: Date;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTUTMMSADeletedFlg'
  })
  bRTUTMMSADeletedFlg: boolean;
}
