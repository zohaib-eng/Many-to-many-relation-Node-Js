module.exports = (sequelize,DataTypes)=>{
    const tutorial_tag = sequelize.define("tutorial_tag", {
        tutorialId: DataTypes.INTEGER,
        taglId: DataTypes.INTEGER,
    });
    return tutorial_tag
}