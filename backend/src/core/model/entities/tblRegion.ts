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

@Entity('tblRegion', { schema: 'public' })
export class tblRegion {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'intRegionID'
  })
  intRegionID: number;

  @Column('text', {
    nullable: true,
    name: 'varRegionName'
  })
  varRegionName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRegionSEOName'
  })
  varRegionSEOName: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'inactive'",
    name: 'varRegionStatus'
  })
  varRegionStatus: string;

  @Column('text', {
    nullable: false,
    name: 'txtRegionAboutSubheader'
  })
  txtRegionAboutSubheader: string;

  @Column('text', {
    nullable: false,
    name: 'txtRegionAboutDescription'
  })
  txtRegionAboutDescription: string;

  @Column('text', {
    nullable: false,
    name: 'varRegionLifestyleImage1'
  })
  varRegionLifestyleImage1: string;

  @Column('text', {
    nullable: false,
    name: 'varRegionLifestyleImage1URL'
  })
  varRegionLifestyleImage1URL: string;

  @Column('text', {
    nullable: false,
    name: 'varRegionLifestyleImage2'
  })
  varRegionLifestyleImage2: string;

  @Column('text', {
    nullable: false,
    name: 'varRegionLifestyleImage2URL'
  })
  varRegionLifestyleImage2URL: string;

  @Column('text', {
    nullable: false,
    name: 'varRegionState'
  })
  varRegionState: string;

  @Column('integer', {
    nullable: true,
    name: 'intRegionDivisionID'
  })
  intRegionDivisionID: number | null;
}
