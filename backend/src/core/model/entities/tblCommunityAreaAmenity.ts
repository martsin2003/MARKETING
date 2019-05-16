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

@Entity('tblCommunityAreaAmenity', { schema: 'public' })
@Index('idx_16761_IX_tblCommunityAmenity_community', ['intCommunityAreaAmenityCommunityID'])
export class tblCommunityAreaAmenity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityAreaAmenityID'
  })
  intCommunityAreaAmenityID: string;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityAreaAmenityCommunityID'
  })
  intCommunityAreaAmenityCommunityID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityName'
  })
  varCommunityAreaAmenityName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityAreaAmenityAreaAmenityCategoryID'
  })
  intCommunityAreaAmenityAreaAmenityCategoryID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityAddress'
  })
  varCommunityAreaAmenityAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityCity'
  })
  varCommunityAreaAmenityCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityState'
  })
  varCommunityAreaAmenityState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityZip'
  })
  varCommunityAreaAmenityZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityPhone'
  })
  varCommunityAreaAmenityPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityDescription'
  })
  varCommunityAreaAmenityDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityWebsite'
  })
  varCommunityAreaAmenityWebsite: string | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'fltCommunityAreaAmenityLatitude'
  })
  fltCommunityAreaAmenityLatitude: number | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'fltCommunityAreaAmenityLongitude'
  })
  fltCommunityAreaAmenityLongitude: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'Active'",
    name: 'varCommunityAreaAmenityStatus'
  })
  varCommunityAreaAmenityStatus: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityAreaAmenityNavOrder'
  })
  intCommunityAreaAmenityNavOrder: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityAreaAmenityCreatedDate'
  })
  dteCommunityAreaAmenityCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityAreaAmenityModifiedDate'
  })
  dteCommunityAreaAmenityModifiedDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityAreaAmenityImage'
  })
  varCommunityAreaAmenityImage: string | null;
}
