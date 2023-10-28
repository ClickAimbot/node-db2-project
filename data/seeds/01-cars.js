const cars = [
    {
        vin: '11111111111111111',
        make: 'honda',
        model: 'civic',
        mileage: 100000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '22222222222222222',
        make: 'toyota',
        model: 'camry',
        mileage: 200000,
        title: 'salvage',
        transmission: 'automatic',
    },
    {
        vin: '33333333333333333',
        make: 'ford',
        model: 'mustang',
        mileage: 300000,
        title: 'clean',
        transmission: 'manual',
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
