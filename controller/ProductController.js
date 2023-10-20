const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const asycHandler = require("../middleware/asyncHandler");

// exports.getAllproducts = asycHandler(async (req, res) => {
//   const products = await prisma.product.findMany({
//     where: {
//       name: {
//         contains: req.query.keyword || "",
//         mode: "insensitive",
//       },
//     },
//   });

//   res.json(products);
// });


exports.getAllproducts = asycHandler(async (req, res) => {
  let products;
  
  if(req.user.isAdmin) {
    products = await prisma.product.findMany({
      where: {
        name: {
          contains: req.query.keyword || "",
          mode: "insensitive",
        },
      },
    });
  } else {
    products = await prisma.product.findMany({
      where: {
        userId: req.user.id,
        name: {
          contains: req.query.keyword || "",
          mode: "insensitive",
        },
      },
    });
  }

  res.json(products);
});


exports.getSingleProduct = asycHandler(async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(req.params.id) },
  });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// exports.createProduct = asycHandler(async (req, res) => {
//   const {
//     name,
//     image,
//     category,
//     description,
//     collection,
//     color,
//     weight,
//     price,
//     quantity,
//     currency,
//     sku,
//     tag,
//   } = req.body;

//   const product = await prisma.product.create({
//     data: {
//       name,
//       userId: req.user.id,
//       image,
//       category,
//       description,
//       collection,
//       color,
//       weight,
//       price,
//       quantity,
//       currency,
//       sku,
//       tag,
//     },
//   });

//   res.status(201).json(product);
// });

exports.createProduct = asycHandler(async (req, res) => {
  const {
    name,
    image,
    category,
    description,
    collection,
    color,
    weight,
    price,
    quantity,
    currency,
    sku,
    tag,
  } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      userId: req.user.id,  // Associate the product with the creating user
      image,
      category,
      description,
      collection,
      color,
      weight,
      price,
      quantity,
      currency,
      sku,
      tag,
    },
  });

  res.status(201).json(product);
});


exports.updateProduct = asycHandler(async (req, res) => {
  const {
    name,
    image,
    category,
    description,
    collection,
    color,
    weight,
    price,
    quantity,
    currency,
    sku,
    tag,
  } = req.body;

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(req.params.id) },
    data: {
      name,
      image,
      category,
      description,
      collection,
      color,
      weight,
      price,
      quantity,
      currency,
      sku,
      tag,
    },
  });

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

exports.deleteProduct = asycHandler(async (req, res) => {
  await prisma.product.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.status(200).json({ message: "Product deleted" });
});
