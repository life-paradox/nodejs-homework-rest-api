const { Contact } = require('../../models/contact');
const createError = require('http-errors');

const updateFavStatus = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    if (!favorite) {
      res.json({ message: 'missing request field' });
    }
    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      {
        new: true,
      }
    );

    if (!result) {
      throw createError[404]();
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavStatus;
