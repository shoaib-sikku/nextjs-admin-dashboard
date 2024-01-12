"use server";

import { redirect } from "next/navigation";
import { Product, User } from "./models";
import { connectDB } from "./utils";
import bcrypt from "bcrypt";

//create new user
export const addUser = async (formData) => {
  console.log(formData);

  const data = Object.fromEntries(formData);

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    const newUser = await User.create({ ...data, password: hashPassword });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new user!");
  }

  redirect("/dashboard/users");
};

//create new product
export const addProduct = async (formData) => {
  const data = Object.fromEntries(formData);

  try {
    connectDB();

    const newProduct = await Product.create(data);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new product!");
  }

  redirect("/dashboard/products");
};

//delete user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user!");
  }

  redirect("/dashboard/users");
};
//delete product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDB();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product!");
  }

  redirect("/dashboard/products");
};

//update user
export const updateUser = async (formData) => {
  const data = Object.fromEntries(formData);

  try {
    connectDB();
    const updatedFields = { ...data };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    // if(updatedFields.password){
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(updatedFields.password,salt);
    // }

    const updateUser = await User.findByIdAndUpdate(data.id, updatedFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user!");
  }

  redirect("/dashboard/users");
};

//update product
export const updateProduct = async (formData) => {
  const data = Object.fromEntries(formData);

  try {
    connectDB();
    const updatedFields = { ...data };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    const updateProduct = await Product.findByIdAndUpdate(
      data.id,
      updatedFields
    );
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product!");
  }
  redirect("/dashboard/products");
};
