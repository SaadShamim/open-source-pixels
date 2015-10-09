module.exports = function(sequelize, DataTypes){
	var Comment = sequelize.define("Comment", {
    	authorName: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
    	description: {
    		type: DataTypes.STRING,
    		allowNull: false,
    	},
        userId: {
            type: DataTypes.INTEGER,
            unique: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            unique: true,
        }
	}, {
        classMethods: {
            associate: function(models) {
                Comment.belongsTo(models.Post, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        name: 'postId',
                        allowNull: false
                    }
                })
            },
        }
    });

	return Comment;
};