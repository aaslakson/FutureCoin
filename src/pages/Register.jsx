import { useState } from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <main className="flex-1 mt-10 md:mt-16">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Create Your Secure Account</p>
                  <p className="text-[#9db9a6] text-base font-normal leading-normal">Join a new generation of trading.</p>
                </div>
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="flex flex-col gap-3 p-4 mt-6">
                <div className="flex gap-6 justify-between"><p className="text-white text-base font-medium leading-normal">Step 1 of 3: Account Credentials</p></div>
                <div className="rounded bg-[#3b5443]"><div className="h-2 rounded bg-primary" style={{width: '33%'}}></div></div>
              </div>
              <form className="mt-8 space-y-8 px-4" onSubmit={handleRegister}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Full Name</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] text-base font-normal leading-normal" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Email Address</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] text-base font-normal leading-normal" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <div className="relative">
                    <label className="flex flex-col flex-1">
                      <p className="text-white text-base font-medium leading-normal pb-2">Password</p>
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] text-base font-normal leading-normal" placeholder="Enter a strong password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className="absolute right-4 top-[46px] text-[#9db9a6] hover:text-white" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">Confirm Password</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3b5443] bg-[#1c271f] focus:border-primary h-14 placeholder:text-[#9db9a6] p-[15px] text-base font-normal leading-normal" placeholder="Confirm your password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white text-sm font-medium">Password strength</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 rounded-full bg-[#3b5443]"><div className="h-1 w-1/3 rounded-full bg-red-500"></div></div>
                    <p className="text-red-500 text-sm font-medium">Weak</p>
                  </div>
                </div>
                <div className="border-t border-[#3b5443] pt-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input className="form-checkbox mt-1 h-5 w-5 rounded border-[#3b5443] bg-[#1c271f] text-primary focus:ring-primary/50 focus:ring-offset-background-dark" type="checkbox"/>
                    <div className="flex-1">
                      <p className="text-white text-base leading-normal">I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.</p>
                    </div>
                  </label>
                </div>
                <div className="flex justify-end">
                  <button className="flex min-w-[180px] w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-[#111813] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="truncate">Create Account &amp; Continue</span>
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
