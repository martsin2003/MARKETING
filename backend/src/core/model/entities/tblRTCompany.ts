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

@Entity('tblRTCompany', { schema: 'public' })
export class tblRTCompany {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCompanyID'
  })
  intRTCompanyID: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTCompanyRTCompanyTypeID'
  })
  intRTCompanyRTCompanyTypeID: number;

  @Column('text', {
    nullable: false,
    name: 'varRTCompanyName'
  })
  varRTCompanyName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTCompanyAcronym'
  })
  varRTCompanyAcronym: string;

  @Column('text', {
    nullable: true,
    name: 'varRTCompanyAddress1'
  })
  varRTCompanyAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCompanyAddress2'
  })
  varRTCompanyAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCompanyCity'
  })
  varRTCompanyCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCompanyState'
  })
  varRTCompanyState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCompanyZip'
  })
  varRTCompanyZip: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'USA'",
    name: 'varRTCompanyCountry'
  })
  varRTCompanyCountry: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCompanyCreatedDate'
  })
  dteRTCompanyCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCompanyModifiedDate'
  })
  dteRTCompanyModifiedDate: Date;
}
