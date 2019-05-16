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

@Entity('tblQualifyDesignCenterCommunication', { schema: 'public' })
export class tblQualifyDesignCenterCommunication {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyDesignCenterCommunicationID'
  })
  intQualifyDesignCenterCommunicationID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyDesignCenterCommunicationValue'
  })
  varQualifyDesignCenterCommunicationValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyDesignCenterCommunicationDisplay'
  })
  varQualifyDesignCenterCommunicationDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyDesignCenterCommunicationSort'
  })
  intQualifyDesignCenterCommunicationSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyDesignCenterCommunicationScore'
  })
  intQualifyDesignCenterCommunicationScore: number | null;
}
