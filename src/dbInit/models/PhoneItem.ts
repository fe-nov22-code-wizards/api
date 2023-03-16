import { DataTypes } from 'sequelize';
import {
  AllowNull,
  Column,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({
  tableName: 'phoneItem',
  createdAt: false,
  updatedAt: false,
})

export class PhoneItem extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    id: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING)
  })
    capacityAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING)
  })
    colorsAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING)
  })
    images: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.JSONB
  })
    description: {title: string, text: string[]}[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    resolution: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    processor: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    camera: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    zoom: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING)
  })
    cell: string[];
}
