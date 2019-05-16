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

@Entity('tblContactStatus', { schema: 'public' })
export class tblContactStatus {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactStatusID'
  })
  intContactStatusID: string;

  @Column('text', {
    nullable: true,
    name: 'varContactStatus'
  })
  varContactStatus: string | null;
}
