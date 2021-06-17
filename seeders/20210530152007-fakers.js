const bcrypt = require("bcrypt")
const { Faker } = require('fakergem')
const { User, AuthenticityToken, AuctionItem } = require('../models')

module.exports = {
  up: async () => {
    await User.destroy({ truncate: true })
    await AuthenticityToken.destroy({ truncate: true })
    await AuctionItem.destroy({ truncate: true })
    
    for (let i = 0; i < 20; i++) {
      const a = await User.create({
        email: `${i}@test.com`,
        passwordHash: await bcrypt.hash('123456', 10),
        name: Faker.Name.name(),
        image: Faker.LoremPixel.image("100x100"),
        Products: [
          {
            title: Faker.Beer.name(),
            description: Faker.Lorem.sentence(2),
            price: Faker.Number.between(10, 200),
            image: Faker.LoremPixel.image("300x300")
          }, {
            title: Faker.Beer.name(),
            description: Faker.Lorem.sentence(2),
            price: Faker.Number.between(10, 200),
            image: Faker.LoremPixel.image("300x300")
          }
        ]
      }, {
        include: User.Products
      })
    }
  },
}
