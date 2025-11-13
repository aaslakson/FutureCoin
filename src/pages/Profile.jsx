const Profile = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-wrap justify-between gap-3 mb-8">
          <p className="text-text-primary-dark text-4xl font-black leading-tight tracking-[-0.033em]">Profile & Settings</p>
        </header>
        <section className="flex p-6 @container bg-background-light dark:bg-surface-dark rounded-xl border border-transparent dark:border-border-dark mb-8">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex items-center gap-6">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24" data-alt="User avatar with abstract background" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeOZXjnUbPWQO-Eg2igZUe1R_0HNqppeJrJQ8afCyXmqCVrqNn3zGDZ5EhQ7iMjQ3x1C-k1zyfD7RiJQ4MxC4Ch6GRabzJkT--T1YO0WPnw7UMHPBkIUGdXVjfcgrUri49J44e832SgbR_BpHuw99u1-6MUFOGE2K5vdU6sLsx24cWkdvLN3_onXpSHHesisfmcZKDMik5XLQd36OTwjjvU6pOPZvKZtBp_BExLe8ValWf50EKX3qUyvYp2dcu5lBqBuK1FLFRzbY")'}}></div>
              <div className="flex flex-col justify-center">
                <p className="text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">Thomas Anders</p>
                <p className="text-text-secondary-dark text-base font-normal leading-normal">Account ID: TA-843519</p>
              </div>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto border border-transparent dark:border-border-dark hover:bg-white/20">
              <span className="truncate">Change Photo</span>
            </button>
          </div>
        </section>
        <section className="bg-background-light dark:bg-surface-dark rounded-xl border border-transparent dark:border-border-dark p-6 mb-8">
          <h2 className="text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 border-b border-transparent dark:border-border-dark">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">First Name</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 placeholder:text-text-secondary-dark px-4 text-base font-normal leading-normal" value="Thomas" />
            </label>
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">Last Name</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 placeholder:text-text-secondary-dark px-4 text-base font-normal leading-normal" value="Anders" />
            </label>
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">Username</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-secondary-dark focus:outline-none border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 px-4 text-base font-normal leading-normal" disabled="" readonly="" value="thomas.anders" />
            </label>
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">Account Tier</p>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-secondary-dark focus:outline-none border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 px-4 text-base font-normal leading-normal" disabled="" readonly="" value="Premium Tier" />
            </label>
          </div>
        </section>
        <section className="bg-background-light dark:bg-surface-dark rounded-xl border border-transparent dark:border-border-dark p-6 mb-8">
          <h2 className="text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 border-b border-transparent dark:border-border-dark">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">Primary Email</p>
              <div className="relative">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 placeholder:text-text-secondary-dark pl-4 pr-24 text-base font-normal leading-normal" value="t.anders@email.com" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xs font-bold bg-primary/20 px-2 py-1 rounded-full">VERIFIED</span>
              </div>
            </label>
            <label className="flex flex-col">
              <p className="text-text-secondary-dark text-sm font-medium leading-normal pb-2">Phone Number</p>
              <div className="relative">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent dark:border-border-dark bg-background-dark/50 dark:bg-background-dark h-12 placeholder:text-text-secondary-dark pl-4 pr-24 text-base font-normal leading-normal" value="+1 234 567 890" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xs font-bold bg-primary/20 px-2 py-1 rounded-full">VERIFIED</span>
              </div>
            </label>
          </div>
        </section>
        <section className="bg-background-light dark:bg-surface-dark rounded-xl border border-transparent dark:border-border-dark p-6 mb-8">
          <h2 className="text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5 border-b border-transparent dark:border-border-dark">Security</h2>
          <div className="divide-y divide-transparent dark:divide-border-dark">
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-text-primary-dark font-medium">Password</p>
                <p className="text-text-secondary-dark text-sm">Last changed on 12th Aug 2023</p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 text-text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] border border-transparent dark:border-border-dark hover:bg-white/20">
                <span className="truncate">Change Password</span>
              </button>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-text-primary-dark font-medium">Two-Factor Authentication</p>
                <p className="text-text-secondary-dark text-sm">Enhance your account security.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked="" className="sr-only peer" type="checkbox" value="" />
                <div className="w-11 h-6 bg-border-dark rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-text-primary-dark font-medium">Active Sessions</p>
                <p className="text-text-secondary-dark text-sm">Manage your logged-in devices.</p>
              </div>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-alert-dark/20 text-alert-dark text-sm font-bold leading-normal tracking-[0.015em] border border-alert-dark/50 hover:bg-alert-dark/30">
                <span className="truncate">Log Out All Devices</span>
              </button>
            </div>
          </div>
        </section>
        <footer className="flex justify-end gap-4 mt-8">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-white/10 text-text-primary-dark text-sm font-bold leading-normal tracking-[0.015em] border border-transparent dark:border-border-dark hover:bg-white/20">
            <span className="truncate">Cancel</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
            <span className="truncate">Save Changes</span>
          </button>
        </footer>
      </div>
    </main>
  );
};

export default Profile;
