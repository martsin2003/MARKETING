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
import { tblFPUser } from './tblFPUser';

@Entity('tblFPUserEmployee', { schema: 'public' })
@Index(
  'idx_17968_IX_tblFPUserEmployee',
  ['bFPUserEmployeeDeletedFlg', 'intFpUserEmployeeFpUser', 'lngUserID'],
  { unique: true }
)
export class tblFPUserEmployee {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPUserEmployeeID'
  })
  intFPUserEmployeeID: string;

  @ManyToOne(type => tblFPUser, tblFPUser => tblFPUser.tblFpUserEmployees, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPUserEmployeeFPUserID' })
  intFpUserEmployeeFpUser: tblFPUser | null;

  @Column('integer', {
    nullable: false,
    name: 'lngUserID'
  })
  lngUserID: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPUserEmployeeDeletedFlg'
  })
  bFPUserEmployeeDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPUserEmployeeCreatedDate'
  })
  dteFPUserEmployeeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPUserEmployeeModifiedDate'
  })
  dteFPUserEmployeeModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPUserEmployeeCreatedBy'
  })
  intFPUserEmployeeCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPUserEmployeeModifiedBy'
  })
  intFPUserEmployeeModifiedBy: number | null;
}
