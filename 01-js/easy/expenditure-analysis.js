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
  let output =[];
  if(transactions.length === output.length){
    return  output;
  }

  if(transactions.length === 1 || output.length === 0){
    output.push({
      category: transactions[0]["category"],
      totalSpent: transactions[0]["price"]
    });

  }

  for(let i=1; i<transactions.length; i++){
      let totalSpent = 0;
      let check = false;
      for(let j=0; j<output.length; j++){
        if(transactions[i]["category"] === output[j]["category"]){
          totalSpent += transactions[i]["price"];
          output[j]["totalSpent"] += totalSpent;
          check = true;
          break;
        }
      }
      if(!check){
        output.push({
          category: transactions[i]["category"],
          totalSpent: transactions[i]["price"]
        });
      }
    }
    return output;
  }

module.exports = calculateTotalSpentByCategory;
