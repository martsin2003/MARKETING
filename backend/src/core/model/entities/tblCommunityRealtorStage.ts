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

@Entity('tblCommunityRealtorStage', { schema: 'public' })
export class tblCommunityRealtorStage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityRealtorStageID'
  })
  intCommunityRealtorStageID: string;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityRealtorCommunityID'
  })
  intCommunityRealtorCommunityID: number;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityRealtorRealtorID'
  })
  intCommunityRealtorRealtorID: number;
}
