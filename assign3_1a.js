orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

const total = Object.values(orderData).reduce(( acc, cur ) => acc + cur, 0);
console.log(total)



// let sum = 0;
// for (let i = 0; i < total.lenght; i++) 
// {
//     sum = sum + total[i]
// }



// console.log(sum);