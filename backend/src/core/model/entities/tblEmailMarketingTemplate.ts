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

@Entity('tblEmailMarketingTemplate', { schema: 'public' })
export class tblEmailMarketingTemplate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intEmailMarketingTemplateID'
  })
  intEmailMarketingTemplateID: string;

  @Column('text', {
    nullable: true,
    name: 'txtEmailMarketingTemplate'
  })
  txtEmailMarketingTemplate: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtEmailMarketingTemplateHeader'
  })
  txtEmailMarketingTemplateHeader: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtEmailMarketingTemplateTemp'
  })
  txtEmailMarketingTemplateTemp: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtEmailMarketingTemplateFooter'
  })
  txtEmailMarketingTemplateFooter: string | null;

  @Column('text', {
    nullable: true,
    name: 'varEmailMarketingTemplateTitle'
  })
  varEmailMarketingTemplateTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varEmailMarketingTemplateSubject'
  })
  varEmailMarketingTemplateSubject: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteEmailMarketingTemplateDate'
  })
  dteEmailMarketingTemplateDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varEmailMarketingTemplateType'
  })
  varEmailMarketingTemplateType: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intEmailMarketingCommunityCRMID'
  })
  intEmailMarketingCommunityCRMID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varEmailMarketingTemplateStatus'
  })
  varEmailMarketingTemplateStatus: string | null;

  @Column('text', {
    nullable: true,
    name: 'varEmailMarketingTemplateSentCampaignName'
  })
  varEmailMarketingTemplateSentCampaignName: string | null;

  @Column('text', {
    nullable: true,
    default: () =>
      "'Prices, financing and offers subject to change without notice. See a Community Sales Manager for details.'",
    name: 'txtEmailMarketingTemplateSentDisclaimerText'
  })
  txtEmailMarketingTemplateSentDisclaimerText: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bRealtorEmail'
  })
  bRealtorEmail: boolean | null;
}
