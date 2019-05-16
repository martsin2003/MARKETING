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

@Entity('tblFinancePlanLender', { schema: 'public' })
export class tblFinancePlanLender {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFinancePlanLenderID'
  })
  intFinancePlanLenderID: string;

  @Column('integer', {
    nullable: true,
    name: 'lngUserID'
  })
  lngUserID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderName'
  })
  varLenderName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOffice'
  })
  varLenderOffice: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOfficeAddress'
  })
  varLenderOfficeAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOfficeAddress2'
  })
  varLenderOfficeAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOfficeCity'
  })
  varLenderOfficeCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOfficeState'
  })
  varLenderOfficeState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderOfficeZip'
  })
  varLenderOfficeZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderPhone'
  })
  varLenderPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderFax'
  })
  varLenderFax: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLenderEmail'
  })
  varLenderEmail: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteLenderCreatedDate'
  })
  dteLenderCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteLenderModifiedDate'
  })
  dteLenderModifiedDate: Date;
}
