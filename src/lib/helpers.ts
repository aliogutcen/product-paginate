

export const getStockColor = (stock: number) => {
  if (stock > 50) {
    return "text-green-700 ";
  } else if (stock > 0) {
    return "text-yellow-500 ";
  } else {
    return "text-red-500";
  }
};

export const calculatePages: (total: number, limit: number) => number = (total, limit) => {
  return Math.ceil(total / limit);
};