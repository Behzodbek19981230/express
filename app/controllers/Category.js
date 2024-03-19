const { Op } = require("sequelize");
const { errorResponse } = require("../../utils/response");
const Category = require("../models/Category");
class CategoryController {
  static async getAllCategory(req, res) {
    try {
      const categoies = await Category.findAndCountAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!categoies.rows.length > 0) {
        return res.status(200).json({
          code: 200,
          status: "OK",
          message: "Success Fetching Data",
          total: 0,
          data: [],
        });
      }
      res.status(200).json({
        code: 200,
        status: "OK",
        message: "Success Fetching Data",
        total: categoies.count,
        data: categoies.rows,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  static async addChapter(req, res) {
    // try {
    //   const { name, object } = req.body;
    //   const objectFind = await Subject.findByPk(object);
    //   if (!objectFind) {
    //     return res.status(400).json({
    //       message: "Not Found Tester",
    //     });
    //   } else {
    //     const chapters = await Chapter.create({
    //       name: name,
    //       object: objectFind?.id,
    //     });
    //     const lessons = await Lesson.findAll({
    //       where: {
    //         object: objectFind?.id,
    //       },
    //       group: ["user"],
    //     });
    //     lessons.forEach(async (lesson) => {
    //       await Lesson.create({
    //         user: lesson?.user,
    //         object: objectFind?.id,
    //         chapter: chapters?.id,
    //       });
    //     });
    //     res.json({ code: 200, status: "OK", chapters });
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({
    //     message: "Internal Server Error",
    //   });
    // }
  }

  static async delete(req, res) {
    // try {
    //   const object = await Chapter.findByPk(req.params.id);
    //   if (!object) {
    //     return errorResponse(res, 404, "Not found", "Cannot find object");
    //   }
    //   const destroy = await Chapter.destroy({ where: { id: req.params.id } });
    //   if (!destroy) {
    //     return errorResponse(res, 400, "Bad Request", "Cannot Delete");
    //   }
    //   res.json({
    //     code: 200,
    //     status: "OK",
    //     message: "Success delete object",
    //   });
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({
    //     message: "Internal Server Error",
    //   });
    // }
  }
}

module.exports = CategoryController;
