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

@Entity('tblWhyBrookfield', { schema: 'public' })
export class tblWhyBrookfield {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWhyBrookfieldID'
  })
  intWhyBrookfieldID: string;

  @Column('text', {
    nullable: true,
    name: 'txtWhyBrookfieldBlock'
  })
  txtWhyBrookfieldBlock: string | null;

  @Column('text', {
    nullable: true,
    name: 'varWhyBrookfieldImage'
  })
  varWhyBrookfieldImage: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtWhyBrookfieldVideoLink'
  })
  txtWhyBrookfieldVideoLink: string | null;
}
