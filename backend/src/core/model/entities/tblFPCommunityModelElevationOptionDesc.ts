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
import { tblFPCommunityModelElevation } from './tblFPCommunityModelElevation';
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPCommunityModelElevationOptionDesc', { schema: 'public' })
@Index(
  'idx_17637_IX_tblFPCommunityModelElevationOptionDesc',
  [
    'bFPCommunityModelElevationOptionDescDeletedFlg',
    'intFpCommunityModelElevationOptionDescFpCommunityModelElevation',
    'intFpCommunityModelElevationOptionDescFpFloorOption',
    'varFPCommunityModelElevationOptionDescStatus'
  ],
  { unique: true }
)
export class tblFPCommunityModelElevationOptionDesc {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelElevationOptionDescID'
  })
  intFPCommunityModelElevationOptionDescID: string;

  @ManyToOne(
    type => tblFPCommunityModelElevation,
    tblFPCommunityModelElevation =>
      tblFPCommunityModelElevation.tblFpCommunityModelElevationOptionDescs,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionDescFPCommunityModelElevation' })
  intFpCommunityModelElevationOptionDescFpCommunityModelElevation: tblFPCommunityModelElevation | null;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpCommunityModelElevationOptionDescs,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionDescFPFloorOptionID' })
  intFpCommunityModelElevationOptionDescFpFloorOption: tblFPFloorOption | null;

  @Column('text', {
    nullable: false,
    name: 'varFPCommunityModelElevationOptionDesc'
  })
  varFPCommunityModelElevationOptionDesc: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPCommunityModelElevationOptionDescStatus'
  })
  varFPCommunityModelElevationOptionDescStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelElevationOptionDescDeletedFlg'
  })
  bFPCommunityModelElevationOptionDescDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionDescCreatedDate'
  })
  dteFPCommunityModelElevationOptionDescCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionDescModifiedDate'
  })
  dteFPCommunityModelElevationOptionDescModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionDescCreatedBy'
  })
  intFPCommunityModelElevationOptionDescCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionDescModifiedBy'
  })
  intFPCommunityModelElevationOptionDescModifiedBy: number | null;
}
