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
import { tblMBFBuyer } from './tblMBFBuyer';
import { tblMBFDevice } from './tblMBFDevice';

@Entity('tblMBFBuyerDevice', { schema: 'public' })
export class tblMBFBuyerDevice {
  @ManyToOne(type => tblMBFBuyer, tblMBFBuyer => tblMBFBuyer.tblMbfBuyerDevices, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFBuyerDeviceMBFBuyerID' })
  intMbfBuyerDeviceMbfBuyer: tblMBFBuyer | null;

  @ManyToOne(type => tblMBFDevice, tblMBFDevice => tblMBFDevice.tblMbfBuyerDevices, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFBuyerDeviceMBFDeviceID' })
  intMbfBuyerDeviceMbfDevice: tblMBFDevice | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFBuyerDeviceCreatedDate'
  })
  dteMBFBuyerDeviceCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFBuyerDeviceModifiedDate'
  })
  dteMBFBuyerDeviceModifiedDate: Date;
}
