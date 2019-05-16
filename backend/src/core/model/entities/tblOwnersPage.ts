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

@Entity('tblOwnersPage', { schema: 'public' })
export class tblOwnersPage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intOwnersPageID'
  })
  intOwnersPageID: string;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDF'
  })
  varOwnersPageNewHomeWarrantyPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageHomeownersManualPDF'
  })
  varOwnersPageHomeownersManualPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPagePostSettlementPDF'
  })
  varOwnersPagePostSettlementPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageText'
  })
  varOwnersPageText: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOwnersPageIntro'
  })
  txtOwnersPageIntro: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOwnersPageFAQs'
  })
  txtOwnersPageFAQs: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOwnersPageNewHomeWarranty'
  })
  txtOwnersPageNewHomeWarranty: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOwnersPagePostSettlement'
  })
  txtOwnersPagePostSettlement: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDF2'
  })
  varOwnersPageNewHomeWarrantyPDF2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDF3'
  })
  varOwnersPageNewHomeWarrantyPDF3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDFHeadline'
  })
  varOwnersPageNewHomeWarrantyPDFHeadline: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDFHeadline2'
  })
  varOwnersPageNewHomeWarrantyPDFHeadline2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDFHeadline3'
  })
  varOwnersPageNewHomeWarrantyPDFHeadline3: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOwnersPageHomeownersManual'
  })
  txtOwnersPageHomeownersManual: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDFHeadline4'
  })
  varOwnersPageNewHomeWarrantyPDFHeadline4: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDFHeadline5'
  })
  varOwnersPageNewHomeWarrantyPDFHeadline5: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDF4'
  })
  varOwnersPageNewHomeWarrantyPDF4: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOwnersPageNewHomeWarrantyPDF5'
  })
  varOwnersPageNewHomeWarrantyPDF5: string | null;
}
