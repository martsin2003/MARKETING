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

@Entity('tblRTEMailMarketingIndustryRateYearType', { schema: 'public' })
export class tblRTEMailMarketingIndustryRateYearType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEMailMarketingIndustryRateYearTypeID'
  })
  intRTEMailMarketingIndustryRateYearTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTEMailMarketingIndustryRateYearType'
  })
  varRTEMailMarketingIndustryRateYearType: string | null;
}
