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

@Entity('tblCommunitySalesRep', { schema: 'public' })
export class tblCommunitySalesRep {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngCommunitySalesRepID'
  })
  lngCommunitySalesRepID: string;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityID'
  })
  intCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngUserID'
  })
  lngUserID: number | null;
}
