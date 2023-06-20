import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class orderlineitem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    orderline_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'product_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    }
  }, {
    sequelize,
    tableName: 'orderlineitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_orderline_id",
        unique: true,
        fields: [
          { name: "orderline_id" },
        ]
      },
    ]
  });
  }
}
