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
import { tblFPFloorGroup } from './tblFPFloorGroup';
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPFloorGroupOption', { schema: 'public' })
export class tblFPFloorGroupOption {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorGroupOptionID'
  })
  intFPFloorGroupOptionID: string;

  @ManyToOne(type => tblFPFloor, tblFPFloor => tblFPFloor.tblFpFloorGroupOptions, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPFloorGroupOptionFPFloorID' })
  intFpFloorGroupOptionFpFloor: tblFPFloor | null;

  @ManyToOne(type => tblFPFloorGroup, tblFPFloorGroup => tblFPFloorGroup.tblFpFloorGroupOptions, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPFloorGroupOptionFPFloorGroupID' })
  intFpFloorGroupOptionFpFloorGroup: tblFPFloorGroup | null;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpFloorGroupOptions,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPFloorGroupOptionFPFloorOptionID' })
  intFpFloorGroupOptionFpFloorOption: tblFPFloorOption | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorGroupOptionOrder'
  })
  intFPFloorGroupOptionOrder: number;
}
