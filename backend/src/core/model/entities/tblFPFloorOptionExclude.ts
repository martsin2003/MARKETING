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
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPFloorOptionExclude', { schema: 'public' })
export class tblFPFloorOptionExclude {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorOptionExcludeID'
  })
  intFPFloorOptionExcludeID: string;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpFloorOptionExcludes,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intFPFloorOptionExcludeFPFloorOptionID' })
  intFpFloorOptionExcludeFpFloorOption: tblFPFloorOption | null;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpFloorOptionExcludes2,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPFloorOptionExcludeTargetFPFloorOptionID' })
  intFpFloorOptionExcludeTargetFpFloorOption: tblFPFloorOption | null;
}
