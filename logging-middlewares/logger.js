// logging-middleware/log.js

export async function Log(stack, level, pkg, message, token) {
  // Prepare the log data object
  const logData = {
    stack,
    level,
    package: pkg,
    message
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Use template literals (backticks) here
        'Authorization': Bearer ${token}
      },
      body: JSON.stringify(logData)
    });
    if (!response.ok) {
      // Optionally handle log submission error here
      // For example, you could throw an error or do a retry
      console.error('Log submission failed', response.status);
    }
    return response.json();
  } catch (error) {
    // Optionally handle network or other errors here
    console.error('Error sending log', error);
  }
}
