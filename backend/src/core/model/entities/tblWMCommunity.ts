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
import { tblCommunity } from './tblCommunity';
import { tblWMCommunityMap } from './tblWMCommunityMap';
import { tblWMCommunitySeries } from './tblWMCommunitySeries';
import { tblWMProject } from './tblWMProject';

@Entity('tblWMCommunity', { schema: 'public' })
@Index(
  'idx_20786_IX_tblWMCommunity',
  ['intWmCommunityCommunity', 'intWMCommunityID', 'varWMCommunityStatus'],
  { unique: true }
)
export class tblWMCommunity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMCommunityID'
  })
  intWMCommunityID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblWmCommunitys, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMCommunityCommunityID' })
  intWmCommunityCommunity: tblCommunity | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMCommunityStatus'
  })
  varWMCommunityStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMCommunityCreatedDate'
  })
  dteWMCommunityCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMCommunityModifiedDate'
  })
  dteWMCommunityModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varWMCommunityCommunityName'
  })
  varWMCommunityCommunityName: string | null;

  @OneToMany(
    type => tblWMCommunityMap,
    tblWMCommunityMap => tblWMCommunityMap.intWmCommunityMapWmCommunity,
    { onDelete: 'CASCADE' }
  )
  tblWmCommunityMaps: tblWMCommunityMap[];

  @OneToMany(
    type => tblWMCommunitySeries,
    tblWMCommunitySeries => tblWMCommunitySeries.intWmCommunitySeriesWmCommunity,
    { onDelete: 'CASCADE' }
  )
  tblWmCommunitySeriess: tblWMCommunitySeries[];

  @OneToMany(type => tblWMProject, tblWMProject => tblWMProject.intWmProjectWmCommunity, {
    onDelete: 'CASCADE'
  })
  tblWmProjects: tblWMProject[];
}
