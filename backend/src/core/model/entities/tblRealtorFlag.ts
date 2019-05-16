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

@Entity('tblRealtorFlag', { schema: 'public' })
export class tblRealtorFlag {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'intRealtorFlagID'
  })
  intRealtorFlagID: number;

  @Column('text', {
    nullable: true,
    name: 'varRealtorFlagURL'
  })
  varRealtorFlagURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealtorFlagSubhead'
  })
  varRealtorFlagSubhead: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealtorFlagHeader'
  })
  varRealtorFlagHeader: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealtorFlagInsideLink'
  })
  varRealtorFlagInsideLink: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealtorFlagInsideLinkText'
  })
  varRealtorFlagInsideLinkText: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bRealtorFlagInsideLinkNew'
  })
  bRealtorFlagInsideLinkNew: boolean | null;
}
