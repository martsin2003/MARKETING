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
import { tblMBFMessageThread } from './tblMBFMessageThread';

@Entity('tblMBFMessageThreadAttachment', { schema: 'public' })
@Index('idx_18606_IX_tblMBFMessageThreadAttachment', [
  'intMbfMessageThreadAttachmentMbfMessageThread'
])
export class tblMBFMessageThreadAttachment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFMessageThreadAttachmentID'
  })
  intMBFMessageThreadAttachmentID: string;

  @ManyToOne(
    type => tblMBFMessageThread,
    tblMBFMessageThread => tblMBFMessageThread.tblMbfMessageThreadAttachments,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intMBFMessageThreadAttachmentMBFMessageThreadID' })
  intMbfMessageThreadAttachmentMbfMessageThread: tblMBFMessageThread | null;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageThreadAttachmentFilename'
  })
  varMBFMessageThreadAttachmentFilename: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageThreadAttachmentFiletype'
  })
  varMBFMessageThreadAttachmentFiletype: string;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltMBFMessageThreadAttachmentFilesize'
  })
  fltMBFMessageThreadAttachmentFilesize: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageThreadAttachmentCreatedDate'
  })
  dteMBFMessageThreadAttachmentCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageThreadAttachmentModifiedDate'
  })
  dteMBFMessageThreadAttachmentModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFMessageThreadAttachmentOriginalFilename'
  })
  varMBFMessageThreadAttachmentOriginalFilename: string | null;
}
