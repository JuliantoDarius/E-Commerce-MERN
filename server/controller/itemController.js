import Item from "../model/itemModel.js";

export const getItems = async (req, res) => {
  res.json(await Item.find());
};
