const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler((req, res) => {
  res.status(200).json({ message: "get method is called" });
});

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public

const getContact = asyncHandler((req, res) => {
  res
    .status(200)
    .json({ message: `get method is called on id ${req.params.id}` });
});

//@desc create contacts
//@route Post /api/contacts/:id
//@access public

const createContact = asyncHandler((req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all finds are mandotry!");
  }
  res.status(201).json({ message: `create method is called` });
});

//@desc edit contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler((req, res) => {
  res
    .status(200)
    .json({ message: `put method is called on id ${req.params.id}` });
});

//@desc delete contacts
//@route Delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler((req, res) => {
  res
    .status(201)
    .json({ message: `deleted method is called on id ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
