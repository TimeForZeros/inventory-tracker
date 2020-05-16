const Item = require('../models/item');

async function index(req, res) {
  const item = await Item.find({});
  res.status(200).json(item);
}

async function detail(req, res) {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
}

async function create(req, res) {
  const item = await Item.create(req.body);
  res.status(201).json(item);
}

async function update(req, res) {
  const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updateItem);
}

async function deleteOne(req, res) {
  const deleteItem = await Item.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteItem);
}


module.exports = {
    create,
    index,
    detail,
    update,
    delete: deleteOne,
};

// function create(req, res) {
//     const event = new Event(req.body);
//     try {
//       event.save();
//     } catch (err) {
//       // Probably a duplicate email
//       res.status(400).json(err);
//     }
//   }
// async function create(req, res) {
//     const event = new Event(req.body);
//     try {
//       await event.save();
//     } catch (err) {
//       // Probably a duplicate email
//       res.status(400).json(err);
//     }
//   }