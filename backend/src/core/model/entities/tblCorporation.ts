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

@Entity('tblCorporation', { schema: 'public' })
export class tblCorporation {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'intCorporationID'
  })
  intCorporationID: number;

  @Column('text', {
    nullable: true,
    name: 'varCorporateBuilderNumber'
  })
  varCorporateBuilderNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateState'
  })
  varCorporateState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateName'
  })
  varCorporateName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateReportingEmail'
  })
  varCorporateReportingEmail: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bSendToCorporateOnly'
  })
  bSendToCorporateOnly: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateAddress'
  })
  varCorporateAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateCity'
  })
  varCorporateCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateFax'
  })
  varCorporateFax: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporatePhone'
  })
  varCorporatePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCorporateZip'
  })
  varCorporateZip: string | null;
}
