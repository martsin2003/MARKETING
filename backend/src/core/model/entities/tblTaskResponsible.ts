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

@Entity('tblTaskResponsible', { schema: 'public' })
export class tblTaskResponsible {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTaskResponsibleID'
  })
  intTaskResponsibleID: string;

  @Column('text', {
    nullable: true,
    name: 'varTaskResponsibleText'
  })
  varTaskResponsibleText: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bTaskResponsibleLeadOnly'
  })
  bTaskResponsibleLeadOnly: boolean | null;
}
