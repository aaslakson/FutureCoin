const Settings = () => {
  return (
    <main className="flex-1 p-6 lg:p-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Profile</h1>
          <p className="text-white/60 dark:text-white/40 text-base font-normal leading-normal mt-2">Manage your personal information and preferences.</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-white/5 dark:bg-black/20 rounded-xl border border-white/10 dark:border-black/20">
            <div className="p-6">
              <h3 className="text-white text-lg font-semibold">Personal Information</h3>
              <p className="text-white/60 dark:text-white/40 text-sm mt-1">Basic details about your account.</p>
            </div>
            <div className="border-t border-white/10 dark:border-black/20">
              <div className="divide-y divide-white/10 dark:divide-black/20">
                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                      <span className="material-symbols-outlined">account_circle</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">Username</p>
                      <p className="text-white/60 dark:text-white/40 text-sm font-normal leading-normal line-clamp-2">Your public display name.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-white text-base font-normal leading-normal">adriantrades</p>
                    <button className="text-primary text-sm font-medium hover:underline">Edit</button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                      <span className="material-symbols-outlined">email</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base font-medium leading-normal line-clamp-1">Email Address</p>
                      <p className="text-white/60 dark:text-white/40 text-sm font-normal leading-normal line-clamp-2">Used for login and notifications.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-white text-base font-normal leading-normal">adrian.smith@email.com</p>
                    <button className="text-primary text-sm font-medium hover:underline">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 dark:bg-black/20 rounded-xl border border-white/10 dark:border-black/20">
            <div className="p-6">
              <h3 className="text-white text-lg font-semibold">Localization</h3>
              <p className="text-white/60 dark:text-white/40 text-sm mt-1">Set your preferred language and currency.</p>
            </div>
            <div className="border-t border-white/10 dark:border-black/20 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <p className="text-white text-base font-medium leading-normal pb-2">Language</p>
                <select className="form-select w-full resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-white/20 dark:border-black/30 bg-white/5 dark:bg-black/20 focus:border-primary/50 h-14 placeholder:text-white/40 px-4 text-base font-normal leading-normal appearance-none bg-no-repeat bg-right" style={{backgroundImage: "url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e&quot;)", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em"}}>
                  <option>English (US)</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </label>
              <label className="flex flex-col">
                <p className="text-white text-base font-medium leading-normal pb-2">Default Currency</p>
                <select className="form-select w-full resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-white/20 dark:border-black/30 bg-white/5 dark:bg-black/20 focus:border-primary/50 h-14 placeholder:text-white/40 px-4 text-base font-normal leading-normal appearance-none bg-no-repeat bg-right" style={{backgroundImage: "url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e&quot;)", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em"}}>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-white/10 dark:border-black/20">
          <button className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors">Cancel</button>
          <button className="px-6 py-2.5 rounded-lg text-background-dark text-sm font-semibold bg-primary hover:bg-opacity-80 transition-colors">Save Changes</button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
