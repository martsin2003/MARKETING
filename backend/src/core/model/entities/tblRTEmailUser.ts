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

@Entity('tblRTEmailUser', { schema: 'public' })
export class tblRTEmailUser {
  @Column('bigint', {
    nullable: false,
    primary: true,
    name: 'intRTEmailUserID'
  })
  intRTEmailUserID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserFirstName'
  })
  varRTEmailUserFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserLastName'
  })
  varRTEmailUserLastName: string | null;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailUserEmail'
  })
  varRTEmailUserEmail: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserCreatedDate'
  })
  dteRTEmailUserCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserModifiedDate'
  })
  dteRTEmailUserModifiedDate: Date;
}
