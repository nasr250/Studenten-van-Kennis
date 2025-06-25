import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setError(error.message);
    } else {
      setSuccess('Wachtwoord succesvol gereset! Je wordt doorgestuurd...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };
  

  return (
    <div style={{
      maxWidth: 400,
      margin: "60px auto",
      padding: 32,
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Wachtwoord Resetten</h2>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="new-password" style={{ fontWeight: 500, display: "block", marginBottom: 8 }}>
          Nieuw Wachtwoord
        </label>
        <input
          id="new-password"
          type="password"
          placeholder="Nieuw Wachtwoord"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            marginBottom: 18,
            fontSize: 16
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#16A085",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          Reset Wachtwoord
        </button>
      </form>
      {error && <p style={{ color: '#c0392b', marginTop: 18, textAlign: "center" }}>{error}</p>}
      {success && <p style={{ color: '#16A085', marginTop: 18, textAlign: "center" }}>{success}</p>}
    </div>
  );
};

export default ResetPassword;