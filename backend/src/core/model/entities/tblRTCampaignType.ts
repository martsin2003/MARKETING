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

@Entity('tblRTCampaignType', { schema: 'public' })
export class tblRTCampaignType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCampaignTypeID'
  })
  intRTCampaignTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTCampaignType'
  })
  varRTCampaignType: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bRTCampaignTypeDisplay'
  })
  bRTCampaignTypeDisplay: boolean | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTCampaignTypeOrder'
  })
  intRTCampaignTypeOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCampaignTypeCreatedDate'
  })
  dteRTCampaignTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCampaignTypeModifiedDate'
  })
  dteRTCampaignTypeModifiedDate: Date;
}
