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

@Entity('tblCommunityRealtorOfficeStage', { schema: 'public' })
export class tblCommunityRealtorOfficeStage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityRealtorOfficeStageID'
  })
  intCommunityRealtorOfficeStageID: string;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityRealtorOfficeCommunityID'
  })
  intCommunityRealtorOfficeCommunityID: number;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityRealtorOfficeRealtorOfficeID'
  })
  intCommunityRealtorOfficeRealtorOfficeID: number;
}
