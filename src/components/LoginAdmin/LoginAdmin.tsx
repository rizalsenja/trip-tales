import './LoginAdmin.scss';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '../../hook/useAuth';
import { Navigate } from 'react-router-dom';
// import mainLogo from '../../assets/icons/main-logo.webp'

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      const firebaseError = e as FirebaseError;
      setError(firebaseError.message || 'Login failed');
    }
  };

  if (!loading && user) return <Navigate to="/admin" replace />;

  return (
    <section className="login-admin">
      <div className="container">
        <h2 className="login-title">Login Admin</h2>
        <p className="login-desc">Login to access Admin</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginAdmin;
