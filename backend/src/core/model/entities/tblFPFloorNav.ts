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
import { tblFPFloor } from './tblFPFloor';
import { tblFPFloorOption } from './tblFPFloorOption';
import { tblFPFloorGroup } from './tblFPFloorGroup';

@Entity('tblFPFloorNav', { schema: 'public' })
export class tblFPFloorNav {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorNavID'
  })
  intFPFloorNavID: string;

  @ManyToOne(type => tblFPFloor, tblFPFloor => tblFPFloor.tblFpFloorNavs, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPFloorNavFPFloorID' })
  intFpFloorNavFpFloor: tblFPFloor | null;

  @ManyToOne(type => tblFPFloorOption, tblFPFloorOption => tblFPFloorOption.tblFpFloorNavs, {})
  @JoinColumn({ name: 'intFPFloorNavFPFloorOptionID' })
  intFpFloorNavFpFloorOption: tblFPFloorOption | null;

  @ManyToOne(type => tblFPFloorGroup, tblFPFloorGroup => tblFPFloorGroup.tblFpFloorNavs, {})
  @JoinColumn({ name: 'intFPFloorNavFPFloorGroupID' })
  intFpFloorNavFpFloorGroup: tblFPFloorGroup | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorNavOrder'
  })
  intFPFloorNavOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorNavCreatedDate'
  })
  dteFPFloorNavCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorNavModifiedDate'
  })
  dteFPFloorNavModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorNavCreatedBy'
  })
  intFPFloorNavCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorNavModifiedBy'
  })
  intFPFloorNavModifiedBy: number | null;
}
