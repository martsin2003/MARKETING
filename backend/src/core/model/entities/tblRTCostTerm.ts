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

@Entity('tblRTCostTerm', { schema: 'public' })
export class tblRTCostTerm {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCostTermID'
  })
  intRTCostTermID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTCostTerm'
  })
  varRTCostTerm: string;

  @Column('text', {
    nullable: true,
    name: 'varRTCostTermAbbr'
  })
  varRTCostTermAbbr: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTCostTermArchivedFlg'
  })
  bRTCostTermArchivedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCostTermCreatedDate'
  })
  dteRTCostTermCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCostTermModifiedDate'
  })
  dteRTCostTermModifiedDate: Date;
}
