import { useState } from 'react';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden p-4">
      <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl bg-gray-900/50 p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2 text-center">
          <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.8995 7.1001L16.5115 7.4881C15.9325 8.0671 15.9325 8.9331 16.5115 9.5121L17.4875 10.4881C18.0675 11.0671 18.9325 11.0671 19.5115 10.4881L19.8995 10.1001C20.4795 9.5211 20.4795 8.6551 19.8995 8.0761L18.9235 7.1001C18.3445 6.5211 17.4785 6.5211 16.8995 7.1001Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M16 12.5C14.73 13.77 14.73 15.23 16 16.5L16.3 16.8C16.88 17.38 17.74 17.38 18.32 16.8L18.5 16.62C19.08 16.04 19.08 15.18 18.5 14.6L17.4 13.5C16.82 12.92 16.82 12.92 16 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.5 16C13.77 14.73 15.23 14.73 16.5 16L16.8 16.3C17.38 16.88 17.38 17.74 16.8 18.32L16.62 18.5C16.04 19.08 15.18 19.08 14.6 18.5L13.5 17.4C12.92 16.82 12.92 16.82 12.5 16Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M7.1001 16.8995L7.4881 16.5115C8.0671 15.9325 8.9331 15.9325 9.5121 16.5115L10.4881 17.4875C11.0671 18.0675 11.0671 18.9325 10.4881 19.5115L10.1001 19.8995C9.5211 20.4795 8.6551 20.4795 8.0761 19.8995L7.1001 18.9235C6.5211 18.3445 6.5211 17.4785 7.1001 16.8995Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M4.1001 10.1L4.4881 9.71201C5.0671 9.13301 5.9331 9.13301 6.5121 9.71201L7.4881 10.688C8.0671 11.267 8.0671 12.133 7.4881 12.712L7.1001 13.1C6.5211 13.679 5.6551 13.679 5.0761 13.1L4.1001 12.124C3.5211 11.545 3.5211 10.679 4.1001 10.1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.5 7.5C11.23 6.23 9.77 6.23 8.5 7.5L8.2 7.8C7.62 8.38 7.62 9.24 8.2 9.8L8.38 9.98C8.96 10.56 9.82 10.56 10.4 9.98L11.5 8.90001C12.08 8.32001 12.08 8.32001 12.5 7.90001V7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.5 12.5C11.23 11.23 9.77 11.23 8.5 12.5L8.2 12.8C7.62 13.38 7.62 14.24 8.2 14.8L8.38 14.98C8.96 15.56 9.82 15.56 10.4 14.98L11.5 13.9C12.08 13.32 12.08 13.32 12.5 12.9V12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M4.5 4.5C3.73 5.27 3.73 6.23 4.5 7L4.8 7.3C5.38 7.88 6.24 7.88 6.82 7.3L7 7.12C7.58 6.54 7.58 5.68 7 5.1L6.1 4.2C5.52 3.62 5.52 3.62 5 3.5H4.5V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.s5"></path></svg>
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight">Secure Log In</h1>
          <p className="text-gray-400">Welcome back. Enter your credentials to access your account.</p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex w-full flex-col gap-4" onSubmit={handleLogin}>
          <label className="flex flex-col flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Email Address</p>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] text-base font-normal leading-normal" placeholder="Enter your email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Password</p>
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] border-r-0 pr-2 text-base font-normal leading-normal" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="text-[#9db9a6] flex border border-[#3b5443] bg-[#1c271f] items-center justify-center px-[15px] rounded-r-lg border-l-0">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
            </div>
          </label>
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <input className="h-5 w-5 rounded border-[#3b5443] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary/50" id="remember-me" style={{'--checkbox-tick-svg': 'url(\'data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(16,34,22)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e\')'}} type="checkbox" />
              <label className="text-white text-base font-normal leading-normal select-none cursor-pointer" htmlFor="remember-me">Remember me</label>
            </div>
            <button className="text-base font-medium leading-normal text-primary hover:text-primary/80 transition-colors">Forgot Password?</button>
          </div>
          <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 transition-all">
            <span className="truncate">Log In</span>
          </button>
        </form>
        <div className="w-full text-center">
          <p className="text-gray-400">Don't have an account? <a className="font-medium text-primary hover:text-primary/80 transition-colors" href="#">Sign Up</a></p>
        </div>
        <div className="flex items-center gap-2 pt-4 text-gray-500">
          <span className="material-symbols-outlined text-base">lock</span>
          <p className="text-xs">Your connection is encrypted and secure.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
