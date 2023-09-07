const asyncHandler=require('express-async-handler')

//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

//@desc create new contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ",req.body)
    const {name,email,phone}=req.body;

    if(!name || !email || !phone)
    {
      res.status(400);
      throw new Error("Please enter all fields");
    }

  res.status(201).json({ message: "create  new contact" });
});

//@desc Get  contact
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `get contact for ${req.params.id}` });
});

//@desc Update  contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `update contact for ${req.params.id}` });
});

//@desc Delete  contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
