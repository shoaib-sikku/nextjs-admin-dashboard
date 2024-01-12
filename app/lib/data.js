import { Product, User } from "./models";
import { connectDB } from "./utils";

//fetch all users
export const fetchUsers = async (q, page) => {
  const item_per_page = 2;

  const regex = new RegExp(q, "i");
  try {
    connectDB();
    const count = await User.find({ username: { $regex: regex } }).count();

    const users = await User.find({ username: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));

    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

//fetch all products
export const fetchProducts = async (q, page) => {
  const item_per_page = 2;

  const regex = new RegExp(q, "i");

  try {
    connectDB();
    const count = await Product.find({ title: { $regex: regex } }).count();

    const products = await Product.find({ title: { $regex: regex } })
      .limit(item_per_page)
      .skip(item_per_page * (page - 1));

    return { products, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

//fetch userDetail
export const fetchUserDetail = async (id) => {
  try {
    connectDB();
    const userDetail = await User.findById(id);

    return userDetail;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
//fetch productDetail
export const fetchProductDetail = async (id) => {
  try {
    connectDB();
    const productDetail = await Product.findById(id);

    return productDetail;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
