/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If category doesn't exist in the map, create a new entry
    if (!categoryMap[category]) {
      categoryMap[category] = {
        category: category,
        totalSpent: price
      };
    } else {
      // If category already exists, update the total spent
      categoryMap[category].totalSpent += price;
    }
  });

  // Convert the values of the map to an array
  const result = Object.values(categoryMap);

  return result;
}

module.exports = calculateTotalSpentByCategory;

