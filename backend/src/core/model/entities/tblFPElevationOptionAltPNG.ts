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
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPElevationOptionAltPNG', { schema: 'public' })
export class tblFPElevationOptionAltPNG {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPElevationOptionAltPNGID'
  })
  intFPElevationOptionAltPNGID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPElevationOptionAltPNGFPElevationID'
  })
  intFPElevationOptionAltPNGFPElevationID: number;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpElevationOptionAltPngs,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPElevationOptionAltPNGFPFloorOptionID' })
  intFpElevationOptionAltPngfpFloorOption: tblFPFloorOption | null;

  @Column('text', {
    nullable: true,
    name: 'varFPElevationOptionAltPNG'
  })
  varFPElevationOptionAltPNG: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPElevationOptionAltPNGDeletedFlg'
  })
  bFPElevationOptionAltPNGDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPElevationOptionAltPNGCreatedDate'
  })
  dteFPElevationOptionAltPNGCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPElevationOptionAltPNGModifiedDate'
  })
  dteFPElevationOptionAltPNGModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPElevationOptionAltPNGCreatedBy'
  })
  intFPElevationOptionAltPNGCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPElevationOptionAltPNGModifiedBy'
  })
  intFPElevationOptionAltPNGModifiedBy: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPElevationOptionAltPNGStatus'
  })
  varFPElevationOptionAltPNGStatus: string;
}
