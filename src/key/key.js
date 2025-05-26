import { useState } from 'react';

export default function ChannelLanding() {
  const [progress, setProgress] = useState({
    telegram: false,
    youtube: false
  });

  const updateProgress = (platform) => {
    setProgress(prev => ({
      ...prev,
      [platform]: true
    }));
  };

  const completedSteps = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (completedSteps / 2) * 100;
  const isDownloadReady = progressPercentage === 100;

  const handleTelegramClick = () => {
    window.open('https://t.me/nhoy200', '_blank');
    updateProgress('telegram');
  };

  const handleYouTubeClick = () => {
    window.open('https://youtube.com/@xai-qq?si=uPsNoogH7OaNU__O', '_blank');
    updateProgress('youtube');
  };

  const handleDownload = () => {
    if (isDownloadReady) {
      window.location.href = 'https://api.khoindvn.eu.org/q26Etj';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-6xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
                My Channel YouTube
              </h1>
              <p className="text-xl text-slate-300 mt-6 leading-relaxed">
                Join Channel{' '}
                <span className="text-sky-400 font-semibold">Telegram</span>
                {' '}and{' '}
                <span className="text-red-400 font-semibold">YouTube</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-100 mb-2">2</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-100 mb-2">2</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-100 mb-2">9.9</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleTelegramClick}
                className="w-full flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Our Telegram
              </button>

              <button
                onClick={handleYouTubeClick}
                className="w-full flex items-center gap-3 bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-300 text-sm">Progress</span>
                <span className="text-slate-300 text-sm">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={!isDownloadReady}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                isDownloadReady
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer'
                  : 'bg-slate-600 text-slate-400 cursor-not-allowed border border-slate-500'
              }`}
            >
              Download Esign Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}