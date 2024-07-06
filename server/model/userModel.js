const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	class User extends Model {}

	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
			fullName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			height_cm: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
			weight_kg: {
				type: DataTypes.DECIMAL(5, 2),
				allowNull: true,
				defaultValue: 0.0,
			},
			xp: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			bio: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			created_at: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			sequelize,
			modelName: "User",
			tableName: "users",
			timestamps: false,
			underscored: true,
		}
	);

	return User;
};
