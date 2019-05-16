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

@Entity('tblWMConstructionStatus', { schema: 'public' })
@Index(
  'idx_20824_IX_tblWMConstructionStatus',
  [
    'bWMConstructionStatusUseForDropdown',
    'bWMConstructionStatusUseForLegend',
    'intWMConstructionStatusOrder',
    'varWMConstructionStatusName'
  ],
  { unique: true }
)
export class tblWMConstructionStatus {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMConstructionStatusID'
  })
  intWMConstructionStatusID: string;

  @Column('text', {
    nullable: false,
    name: 'varWMConstructionStatusName'
  })
  varWMConstructionStatusName: string;

  @Column('text', {
    nullable: true,
    name: 'varWMConstructionStatusImage'
  })
  varWMConstructionStatusImage: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMConstructionStatusCreatedDate'
  })
  dteWMConstructionStatusCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMConstructionStatusModifiedDate'
  })
  dteWMConstructionStatusModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intWMConstructionStatusOrder'
  })
  intWMConstructionStatusOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bWMConstructionStatusUseForLegend'
  })
  bWMConstructionStatusUseForLegend: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bWMConstructionStatusUseForDropdown'
  })
  bWMConstructionStatusUseForDropdown: boolean;
}
