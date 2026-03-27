import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import logo from '../../assets/7518b57820fb1e403ea3c90ebd7d5029c977eed2.png';
import { useState } from 'react';
import './Login.css';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <img src={logo} alt="MUTY" className="h-12 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-2">ログイン</h1>
            <p className="text-muted-foreground">アカウントにログインしてください</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-start gap-2">
              <input
                id="terms"
                type="checkbox"
                checked={username !== ''}
                onChange={(e) => setUsername(e.target.checked ? 'accepted' : '')}
                className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-sm cursor-pointer">
                利用規約とプライバシーポリシーに同意します
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-gray-700 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.737 7.395 3.977 10 3.977z" fill="#EA4335"/>
              </svg>
              Googleでログイン
            </button>
          </form>

          <div className="text-center space-y-4">
            <Link to="/register" className="block text-primary hover:underline mb-8">
              アカウントをお持ちでない方はこちら
            </Link>
            <Link 
              to="/concept" 
              className="block w-full py-3 bg-gradient-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity text-center"
            >
              MUTYとは？
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}