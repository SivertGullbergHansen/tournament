import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "steamId",
  })
  steamId?: string;
}
