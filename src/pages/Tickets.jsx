import React, { useState, useEffect } from 'react'
import styles from '../styles/Tickets.module.css'

export default function Tickets() {
  const [tickets, setTickets] = useState([])
  const [newTicket, setNewTicket] = useState({ subject: '', description: '', priority: 'Low' })

  const handleChange = (e) => {
    setNewTicket({ ...newTicket, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newTicket.subject || !newTicket.description) return

    // Placeholder for backend API POST
    const createdTicket = {
      id: Date.now(),
      ...newTicket,
      status: 'Open',
      createdAt: new Date().toLocaleString(),
    }

    setTickets([createdTicket, ...tickets])
    setNewTicket({ subject: '', description: '', priority: 'Low' })
  }

  // Simulate fetching tickets
  useEffect(() => {
    // TODO: Replace with API call
    setTickets([
      {
        id: 1,
        subject: 'Login issue',
        description: 'User cannot login.',
        priority: 'High',
        status: 'Open',
        createdAt: '2025-05-01 10:30 AM',
      },
    ])
  }, [])

  return (
    <div className={styles.container}>
      <h2>Tickets</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newTicket.subject}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTicket.description}
          onChange={handleChange}
        />
        <select name="priority" value={newTicket.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Create Ticket</button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
              <td>{ticket.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

