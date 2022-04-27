import axios from 'axios'

const API_URL = '/api/tickets/'

//Create a ticket

const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = axios.post(API_URL, ticketData, config)

  return response.data
}

const ticketService = {
  createTicket,
}

export default ticketService
