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
import { tblFPElevation } from './tblFPElevation';
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPElevationOptionRemove', { schema: 'public' })
export class tblFPElevationOptionRemove {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPElevationOptionRemoveID'
  })
  intFPElevationOptionRemoveID: string;

  @ManyToOne(type => tblFPElevation, tblFPElevation => tblFPElevation.tblFpElevationOptionRemoves, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPElevationOptionRemoveFPElevationID' })
  intFpElevationOptionRemoveFpElevation: tblFPElevation | null;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpElevationOptionRemoves,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPElevationOptionRemoveFPFloorOptionID' })
  intFpElevationOptionRemoveFpFloorOption: tblFPFloorOption | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPElevationOptionRemoveDeletedFlg'
  })
  bFPElevationOptionRemoveDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPElevationOptionRemoveCreatedDate'
  })
  dteFPElevationOptionRemoveCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPElevationOptionRemoveModifiedDate'
  })
  dteFPElevationOptionRemoveModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPElevationOptionRemoveCreatedBy'
  })
  intFPElevationOptionRemoveCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPElevationOptionRemoveModifiedBy'
  })
  intFPElevationOptionRemoveModifiedBy: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPElevationOptionRemoveStatus'
  })
  varFPElevationOptionRemoveStatus: string;
}
