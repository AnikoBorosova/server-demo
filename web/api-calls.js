const fetch = require('node-fetch');

const sendUserName = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/registration`,
      {
        method: 'POST',
        headers: {
          Accept: 'text/html',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'username=John Smith'
      },
    );

    // console.log('RESPONSE FROM SERVER', await response);

    const result = await response.text();
    console.log('RESULT FROM SERVER', await result);

  } catch (err) {
    throw new Error(`Error while sending username: ${err}`);
  }
};

sendUserName();