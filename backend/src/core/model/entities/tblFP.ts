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
import { tblFPCommunityModelElevation } from './tblFPCommunityModelElevation';
import { tblFPElevation } from './tblFPElevation';

@Entity('tblFP', { schema: 'public' })
export class tblFP {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPID'
  })
  intFPID: string;

  @Column('text', {
    nullable: false,
    name: 'varFPTemplateName'
  })
  varFPTemplateName: string;

  @Column('text', {
    nullable: true,
    name: 'varFPTemplateVersion'
  })
  varFPTemplateVersion: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPTemplateStatus'
  })
  varFPTemplateStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPTemplateCreatedDate'
  })
  dteFPTemplateCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPTemplateModifiedDate'
  })
  dteFPTemplateModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPTemplateCreatedBy'
  })
  intFPTemplateCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPTemplateModifiedBy'
  })
  intFPTemplateModifiedBy: number | null;

  @Column('text', {
    nullable: true,
    name: 'varFPTemplateNotes'
  })
  varFPTemplateNotes: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPTemplateDeletedFlg'
  })
  bFPTemplateDeletedFlg: boolean;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltFPTemplatePixelsPerInch'
  })
  fltFPTemplatePixelsPerInch: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPTemplateInitZoomOverride'
  })
  bFPTemplateInitZoomOverride: boolean;

  @OneToMany(
    type => tblFPCommunityModelElevation,
    tblFPCommunityModelElevation => tblFPCommunityModelElevation.intFpCommunityModelElevationFp,
    { onDelete: 'CASCADE' }
  )
  tblFpCommunityModelElevations: tblFPCommunityModelElevation[];

  @OneToMany(type => tblFPElevation, tblFPElevation => tblFPElevation.intFpElevationFp)
  tblFpElevations: tblFPElevation[];
}
