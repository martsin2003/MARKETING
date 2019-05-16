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

@Entity('tblFPCommunityModelElevationOptionRemove', { schema: 'public' })
@Index('idx_17670_IX_tblFPCommunityModelElevationOptionRemove', [
  'bFPCommunityModelElevationOptionRemoveDeletedFlg',
  'intFpCommunityModelElevationOptionRemoveFpCommunityModelElevati',
  'intFpCommunityModelElevationOptionRemoveFpFloorOption'
])
export class tblFPCommunityModelElevationOptionRemove {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelElevationOptionRemoveID'
  })
  intFPCommunityModelElevationOptionRemoveID: string;

  @ManyToOne(
    type => tblFPCommunityModelElevation,
    tblFPCommunityModelElevation =>
      tblFPCommunityModelElevation.tblFpCommunityModelElevationOptionRemoves,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionRemoveFPCommunityModelElevati' })
  intFpCommunityModelElevationOptionRemoveFpCommunityModelElevati: tblFPCommunityModelElevation | null;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpCommunityModelElevationOptionRemoves,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionRemoveFPFloorOptionID' })
  intFpCommunityModelElevationOptionRemoveFpFloorOption: tblFPFloorOption | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPCommunityModelElevationOptionRemoveStatus'
  })
  varFPCommunityModelElevationOptionRemoveStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelElevationOptionRemoveDeletedFlg'
  })
  bFPCommunityModelElevationOptionRemoveDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionRemoveCreatedDate'
  })
  dteFPCommunityModelElevationOptionRemoveCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionRemoveModifiedDate'
  })
  dteFPCommunityModelElevationOptionRemoveModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionRemoveCreatedBy'
  })
  intFPCommunityModelElevationOptionRemoveCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionRemoveModifiedBy'
  })
  intFPCommunityModelElevationOptionRemoveModifiedBy: number | null;
}
