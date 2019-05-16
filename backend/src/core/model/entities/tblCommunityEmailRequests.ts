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

@Entity('tblCommunityEmailRequests', { schema: 'public' })
export class tblCommunityEmailRequests {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityEmailRequestsID'
  })
  intCommunityEmailRequestsID: string;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtCommunityEmailRequestsDate'
  })
  dtCommunityEmailRequestsDate: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityEmailRequestsSalesRepID'
  })
  intCommunityEmailRequestsSalesRepID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsContactPhone'
  })
  varCommunityEmailRequestsContactPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsFrom'
  })
  varCommunityEmailRequestsFrom: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsFromAddress'
  })
  varCommunityEmailRequestsFromAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsReplyAddress'
  })
  varCommunityEmailRequestsReplyAddress: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityEmailRequestsCommID'
  })
  intCommunityEmailRequestsCommID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCommAddress'
  })
  varCommunityEmailRequestsCommAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsSubject'
  })
  varCommunityEmailRequestsSubject: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtCommunityEmailRequestsContent'
  })
  txtCommunityEmailRequestsContent: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsPricingFrom'
  })
  varCommunityEmailRequestsPricingFrom: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsPricingTo'
  })
  varCommunityEmailRequestsPricingTo: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtCommunityEmailRequestsIncentiveDisclaimer'
  })
  txtCommunityEmailRequestsIncentiveDisclaimer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsStatus'
  })
  varCommunityEmailRequestsStatus: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCampaignName'
  })
  varCommunityEmailRequestsCampaignName: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtCommunityEmailRequestsSendDate'
  })
  dtCommunityEmailRequestsSendDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCommCity'
  })
  varCommunityEmailRequestsCommCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCommCounty'
  })
  varCommunityEmailRequestsCommCounty: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCommState'
  })
  varCommunityEmailRequestsCommState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEmailRequestsCommZip'
  })
  varCommunityEmailRequestsCommZip: string | null;
}
