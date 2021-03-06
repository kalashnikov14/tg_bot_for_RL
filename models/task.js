const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Task = sequelize.define("task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    initiator: {
        type: DataTypes.INTEGER
    },
    initiatorName: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING,
    },
    text: {
        type: DataTypes.STRING,
    },
    workersArr: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    chatIdArr: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isFailed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dateEnd : {
        type: DataTypes.DATE
    },
    
},
{
    tableName: "tasks",
    freezeTableName: true,
}
)

// Task.sync({
//     force:true
// })
 

module.exports = Task