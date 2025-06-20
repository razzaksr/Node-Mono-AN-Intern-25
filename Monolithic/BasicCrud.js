var customers_incomes = [8.9,12.5,9.5,1.8,2.5,9.5]

// CRUD

// create
customers_incomes.push(5.6)
// read
console.log(customers_incomes)
// update
customers_incomes[1]=15.6
console.log(customers_incomes)
// read by position/ index
console.log(customers_incomes[3])
// delete at recent/ last inserted
customers_incomes.pop()
console.log(customers_incomes)

// filter
// const deletion = (value,index) => {
//     return index!=3
// }
// customers_incomes = customers_incomes.filter(deletion)
customers_incomes = customers_incomes.filter((value,index) => {
    return index!=3
})
console.log(customers_incomes)

