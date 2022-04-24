const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requires: true,
      ref: 'User',
    },
    product: {
      type: String,
      requires: [true, 'Please select a product'],
      enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'],
    },
    description: {
      type: String,
      requires: [true, 'Please enter a description of the issue'],
    },
    status: {
      type: String,
      requires: true,
      enum: ['new', 'open', 'close'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
