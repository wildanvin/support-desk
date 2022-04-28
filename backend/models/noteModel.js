const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requires: true,
      ref: 'User',
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      requires: true,
      ref: 'Ticket',
    },
    isStaff: {
      type: Boolean,
      defaul: false,
    },
    staffId: {
      type: String,
    },
    text: {
      type: String,
      requires: [true, 'Please enter text'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Note', noteSchema)
