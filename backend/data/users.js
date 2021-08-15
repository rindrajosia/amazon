import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@exampke.com',
    password: bcrypt.hashSync('123456789', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@exampke.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@exampke.com',
    password: bcrypt.hashSync('123456789', 10),
  },
]

export default users
