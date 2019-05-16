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

@Entity('tblServiceRequest', { schema: 'public' })
export class tblServiceRequest {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intServiceRequestID'
  })
  intServiceRequestID: string;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestFirstName'
  })
  varServiceRequestFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestLastName'
  })
  varServiceRequestLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestCommunity'
  })
  varServiceRequestCommunity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestLotNumber'
  })
  varServiceRequestLotNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestAddress'
  })
  varServiceRequestAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestCity'
  })
  varServiceRequestCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestState'
  })
  varServiceRequestState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestZip'
  })
  varServiceRequestZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestEmail'
  })
  varServiceRequestEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestPhone'
  })
  varServiceRequestPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestOriginalHomeowner'
  })
  varServiceRequestOriginalHomeowner: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtServiceRequestSubmitDate'
  })
  dtServiceRequestSubmitDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varServiceRequestContacted'
  })
  varServiceRequestContacted: string | null;
}
