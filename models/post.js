module.exports = function(sequelize, DataTypes){
	var Post = sequelize.define("Post", {
    	title: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
    	imageUrl: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
        description: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            unique: true,
        }
	}, {
        classMethods: {
            associate: function(models) {
                Post.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name: 'userId',
                        allowNull: false
                    }
                })
            },
        }
    });

	return Post;
};