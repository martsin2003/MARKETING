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
import { tblFPFloorGroup } from './tblFPFloorGroup';
import { tblFPFloorGroupOption } from './tblFPFloorGroupOption';
import { tblFPFloorNav } from './tblFPFloorNav';
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPFloor', { schema: 'public' })
@Index(
  'idx_17769_IX_tblFPFloor',
  [
    'bFPFloorDeletedFlg',
    'bFPFloorIsDefaultFlg',
    'dteFPFloorCreatedDate',
    'dteFPFloorModifiedDate',
    'intFPFloorFPID',
    'intFPFloorLevel',
    'intFPFloorOrder',
    'varFPFloorBasePNG',
    'varFPFloorLabel',
    'varFPFloorPrintLabel',
    'varFPFloorStatus'
  ],
  { unique: true }
)
export class tblFPFloor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorID'
  })
  intFPFloorID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorFPID'
  })
  intFPFloorFPID: number;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorLevel'
  })
  intFPFloorLevel: number;

  @Column('text', {
    nullable: false,
    default: () => "'First Floor'",
    name: 'varFPFloorLabel'
  })
  varFPFloorLabel: string;

  @Column('text', {
    nullable: false,
    default: () => "'First Floor'",
    name: 'varFPFloorPrintLabel'
  })
  varFPFloorPrintLabel: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorOrder'
  })
  intFPFloorOrder: number;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorBasePNG'
  })
  varFPFloorBasePNG: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorIsDefaultFlg'
  })
  bFPFloorIsDefaultFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorCreatedDate'
  })
  dteFPFloorCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorModifiedDate'
  })
  dteFPFloorModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorCreatedBy'
  })
  intFPFloorCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorModifiedBy'
  })
  intFPFloorModifiedBy: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPFloorStatus'
  })
  varFPFloorStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorDeletedFlg'
  })
  bFPFloorDeletedFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorConditionalPrintFlg'
  })
  bFPFloorConditionalPrintFlg: boolean;

  @OneToMany(type => tblFPFloorGroup, tblFPFloorGroup => tblFPFloorGroup.intFpFloorGroupFpFloor, {
    onDelete: 'CASCADE'
  })
  tblFpFloorGroups: tblFPFloorGroup[];

  @OneToMany(
    type => tblFPFloorGroupOption,
    tblFPFloorGroupOption => tblFPFloorGroupOption.intFpFloorGroupOptionFpFloor,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorGroupOptions: tblFPFloorGroupOption[];

  @OneToMany(type => tblFPFloorNav, tblFPFloorNav => tblFPFloorNav.intFpFloorNavFpFloor, {
    onDelete: 'CASCADE'
  })
  tblFpFloorNavs: tblFPFloorNav[];

  @OneToMany(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.intFpFloorOptionFpFloor,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorOptions: tblFPFloorOption[];
}
