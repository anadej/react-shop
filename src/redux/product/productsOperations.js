import { getAllAdvByCategory } from "../../services/api";

export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  try {
    const response = await getAllAdvByCategory(category);
    console.log(response);
  } catch (error) {}
};
