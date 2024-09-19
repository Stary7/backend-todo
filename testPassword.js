const bcrypt = require('bcryptjs');

const testPassword = async () => {
  const password = 'securepassword123'; // Use the password from registration
  const hashedPassword = '$2a$10$2ipECJ20cJKoC5NT7ilbD.rRlnWETiL8c0ktm5gJl/P2Dx.DsZAIq'; // Use the hashed password from MongoDB

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log('Password Match:', isMatch); // Should print true if the password matches
};

testPassword();
