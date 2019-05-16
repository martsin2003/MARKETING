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

@Entity('tblQualifyPreferredLenderCommunication', { schema: 'public' })
export class tblQualifyPreferredLenderCommunication {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyPreferredLenderCommunicationID'
  })
  intQualifyPreferredLenderCommunicationID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyPreferredLenderCommunicationValue'
  })
  varQualifyPreferredLenderCommunicationValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyPreferredLenderCommunicationDisplay'
  })
  varQualifyPreferredLenderCommunicationDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyPreferredLenderCommunicationSort'
  })
  intQualifyPreferredLenderCommunicationSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyPreferredLenderCommunicationScore'
  })
  intQualifyPreferredLenderCommunicationScore: number | null;
}
