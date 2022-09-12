const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

//済 find all categories
//済 be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, through: ProductTag, as: 'associated_products' }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  //済 find one category by its `id` value
  //済 be sure to include its associated Products
 try {
   const categoryData = await Category.findByPk(req.params.id, {
     include: [{ model: Product, through: ProductTag, as: 'associated_products'}]
   });
   res.status(200).json(categoryData);
 } catch (err) {
   res.status(500).json(err);
 }
});

router.post('/', async (req, res) => {
  //済 create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  //🚨未完成🚨 update a category by its `id` value
  try{ 

  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  //済 delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData){
      res.status(404).json({ message: "No category found with this id number."})
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
