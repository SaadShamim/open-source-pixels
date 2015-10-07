var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("User", {
    	email: {
    		type: DataTypes.STRING,
    		unique: true,
    		allowNull: false,
    	},
    	password: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
	}, {
        classMethods: {
            generateHash: function(password) {
               return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
            },
            validPassword: function(password, hash) {
                return bcrypt.compareSync(password, hash);
            },
            associate: function(models) {
                User.hasMany(models.Post, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name: 'userId',
                        allowNull: false
                    }
                })
            },
        }
    });

	return User;
};