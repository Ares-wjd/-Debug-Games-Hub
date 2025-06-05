async function verifyAdminPassword(password) {
  try {
    const res = await fetch('/verify-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const result = await res.json();
    return result.success;
  } catch (err) {
    console.error('Password verification failed', err);
    return false;
  }
}
