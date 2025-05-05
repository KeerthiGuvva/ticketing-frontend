import React from 'react'

 {
  
    <div style={{ padding: '2rem' }}>
      <h2>Signup Page</h2>
    </div>
  
 }




  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required')
      return
    }

    // TODO: Replace with actual API call
    console.log('Signing up...', form)
  }

  
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  



import axios from '../api/axios'


{
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/auth/signup', form)
      console.log('Signup success', res.data)
      navigate('/login')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.message || 'Signup failed')
    }
  }

  
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>

}
