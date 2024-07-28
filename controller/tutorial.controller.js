const db = require("../model/index");
const Tutorial = db.tutorial;
const Tag = db.tag;
const Op = db.Sequelize.Op;



exports.create = (tutorial) => {
    return Tutorial.create({
      title: tutorial.title,
      description: tutorial.description,
    })
      .then((tutorial) => {
        console.log(">> Created Tutorial: " + JSON.stringify(tutorial, null, 4));
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while creating Tutorial: ", err);
      });
  };

  // exports.findAll = () => {
  //   return Tutorial.findAll({
  //     include: [
  //       {
  //         model: Tag,
  //         as: "tags",
  //         attributes: ["id", "name"],
  //         through: {
  //           attributes: [],
  //         },
  //         // through: {
  //         //   attributes: ["tag_id", "tutorial_id"],
  //         // },
  //       },
  //     ],
  //   })
  //     .then((tutorials) => {
  //       return tutorials;
  //     })
  //     .catch((err) => {
  //       console.log(">> Error while retrieving Tutorials: ", err);
  //     });
  // };

  exports.findById = (id) => {
    return Tutorial.findByPk(id, {
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    })
      .then((tutorial) => {
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while finding Tutorial: ", err);
      });
  };




