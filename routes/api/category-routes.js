const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Since a unique UUID value will be create by default, we just need to provide the `id` of the product that will own this new category.

router.post("/", async (req, res) => {
  // create a new category

  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    if (!newCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // updates a category by its `id` value
  try {
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // checks if the Category ID exists. If not - message pops up:
    const categoryId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryId) {
      res
        .status(200)
        .json({ message: "Did not find any Categories with this ID!" });
      return;
    }

    res.status(200).json(updatedCategory);
    console.log("Success! Category was updated!");
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
