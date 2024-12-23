import React, { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8083/api/auth/reset-password', { token, newPassword });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response?.data || 'An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;
