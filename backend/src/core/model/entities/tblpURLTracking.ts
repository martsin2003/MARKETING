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

@Entity('tblpURLTracking', { schema: 'public' })
export class tblpURLTracking {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intpURLTrackingID'
  })
  intpURLTrackingID: string;

  @Column('integer', {
    nullable: true,
    name: 'intpURLTrackingCompanyID'
  })
  intpURLTrackingCompanyID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingWebsiteURL'
  })
  varpURLTrackingWebsiteURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCampaignSource'
  })
  varpURLTrackingCampaignSource: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCampaignMedium'
  })
  varpURLTrackingCampaignMedium: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCampaignTerm'
  })
  varpURLTrackingCampaignTerm: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCampaignContent'
  })
  varpURLTrackingCampaignContent: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCampaignName'
  })
  varpURLTrackingCampaignName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingWhole'
  })
  varpURLTrackingWhole: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingCategory'
  })
  varpURLTrackingCategory: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intpURLTrackingAdvertisingTypeID'
  })
  intpURLTrackingAdvertisingTypeID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtepURLTrackingRequestedDate'
  })
  dtepURLTrackingRequestedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtepURLTrackingInsertRequiredDate'
  })
  dtepURLTrackingInsertRequiredDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingURL'
  })
  varpURLTrackingURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingJobNumber'
  })
  varpURLTrackingJobNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varpURLTrackingURLFolder'
  })
  varpURLTrackingURLFolder: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bpURLTrackingArchive'
  })
  bpURLTrackingArchive: boolean | null;
}
