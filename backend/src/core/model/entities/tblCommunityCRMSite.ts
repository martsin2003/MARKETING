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

@Entity('tblCommunityCRMSite', { schema: 'public' })
export class tblCommunityCRMSite {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityCRMSiteID'
  })
  intCommunityCRMSiteID: string;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityCRMSiteCommunityID'
  })
  intCommunityCRMSiteCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityCRMSiteSiteID'
  })
  intCommunityCRMSiteSiteID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityCRMSiteDescription'
  })
  varCommunityCRMSiteDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityCRMSiteGLat'
  })
  varCommunityCRMSiteGLat: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityCRMSiteGLong'
  })
  varCommunityCRMSiteGLong: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'adminlogo.gif'",
    name: 'varCommunityCRMSiteImage'
  })
  varCommunityCRMSiteImage: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityCRMSiteLogFileFolder'
  })
  varCommunityCRMSiteLogFileFolder: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bCommunityCRMSiteOSC'
  })
  bCommunityCRMSiteOSC: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bCommunityCRMSiteDiv'
  })
  bCommunityCRMSiteDiv: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bCommunityCRMSiteDCenter'
  })
  bCommunityCRMSiteDCenter: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bCommunityCRMSiteCorp'
  })
  bCommunityCRMSiteCorp: boolean | null;
}
