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
  RelationId,
} from 'typeorm';

@Entity('tblCampaign2', { schema: 'public' })
export class tblCampaign2 {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCampaignID',
  })
  intCampaignID: string;

  @Column('text', {
    nullable: true,
    name: 'varCampaignName',
  })
  varCampaignName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCampaignCategoryID',
  })
  intCampaignCategoryID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCampaignContactTypeID',
  })
  intCampaignContactTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCRMCommunityID',
  })
  intCRMCommunityID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCampaignStartDate',
  })
  dteCampaignStartDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCampaignCreatedDate',
  })
  dteCampaignCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCampaignModifiedDate',
  })
  dteCampaignModifiedDate: Date;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bCampaignOSCAssigned',
  })
  bCampaignOSCAssigned: boolean;
}
