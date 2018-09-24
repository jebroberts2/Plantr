const Sequalize = require("sequelize");
const db = new Sequalize("postgres://localhost:5432/plantr");

const Gardener = db.define("gardeners", {
    name: Sequalize.STRING,
    age: Sequalize.INTEGER
})

const Plot = db.define("plots", {
    size: Sequalize.INTEGER,
    shaded: Sequalize.BOOLEAN
})

const Vegetable = db.define("vegetables", {
    name: Sequalize.STRING,
    color: Sequalize.STRING,
    planted_on: Sequalize.DATE
})


Vegetable.belongsToMany(Plot, {
    through: 'vegetable_plot'
})
Plot.belongsToMany(Vegetable, {
    through: 'vegetable_plot'
})
Gardener.belongsTo(Vegetable, {
    as: 'favorite_vegetable'
})

Plot.belongsTo(Gardener, {
    as: 'gardenerId'
})



module.exports = db;