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
import { tblFPUser } from './tblFPUser';
import { tblCommunity } from './tblCommunity';

@Entity('tblFPUserSavedFloorplan', { schema: 'public' })
@Index('idx_17975_IX_tblFPUserSavedFloorplan_fpUserID', ['intFpUserSavedFloorplanFpUser'])
export class tblFPUserSavedFloorplan {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPUserSavedFloorplanID'
  })
  intFPUserSavedFloorplanID: string;

  @ManyToOne(type => tblFPUser, tblFPUser => tblFPUser.tblFpUserSavedFloorplans, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPUserSavedFloorplanFPUserID' })
  intFpUserSavedFloorplanFpUser: tblFPUser | null;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblFpUserSavedFloorplans, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPUserSavedFloorplanCommunityID' })
  intFpUserSavedFloorplanCommunity: tblCommunity | null;

  @Column('text', {
    nullable: false,
    name: 'varFPUserSavedFloorplanName'
  })
  varFPUserSavedFloorplanName: string;

  @Column('integer', {
    nullable: true,
    name: 'intFPUserSavedFloorplanModelID'
  })
  intFPUserSavedFloorplanModelID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPUserSavedFloorplanElevationID'
  })
  intFPUserSavedFloorplanElevationID: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPUserSavedFloorplanGenericsFlg'
  })
  bFPUserSavedFloorplanGenericsFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varFPUserSavedFloorplanConfigurationData'
  })
  varFPUserSavedFloorplanConfigurationData: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPUserSavedFloorplanFurnitureData'
  })
  varFPUserSavedFloorplanFurnitureData: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPUserSavedFloorplanCreatedDate'
  })
  dteFPUserSavedFloorplanCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPUserSavedFloorplanModifiedDate'
  })
  dteFPUserSavedFloorplanModifiedDate: Date;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPUserSavedFloorplanFlippedFlg'
  })
  bFPUserSavedFloorplanFlippedFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varFPUserSavedFloorplanThumbPath'
  })
  varFPUserSavedFloorplanThumbPath: string | null;
}
