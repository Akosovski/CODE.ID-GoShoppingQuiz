import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cart from  "./cart.js";
import _category from  "./category.js";
import _itemproduct from  "./itemproduct.js";
import _orderlineitem from  "./orderlineitem.js";
import _orders from  "./orders.js";
import _product from  "./product.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const cart = _cart.init(sequelize, DataTypes);
  const category = _category.init(sequelize, DataTypes);
  const itemproduct = _itemproduct.init(sequelize, DataTypes);
  const orderlineitem = _orderlineitem.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  itemproduct.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(itemproduct, { as: "itemproducts", foreignKey: "cart_id"});
  product.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product, { as: "products", foreignKey: "category_id"});
  orderlineitem.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(orderlineitem, { as: "orderlineitems", foreignKey: "order_id"});
  cart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(cart, { as: "carts", foreignKey: "product_id"});
  orderlineitem.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(orderlineitem, { as: "orderlineitems", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  itemproduct.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(itemproduct, { as: "itemproducts", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    cart,
    category,
    itemproduct,
    orderlineitem,
    orders,
    product,
    users,
  };
}
