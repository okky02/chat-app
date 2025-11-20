// components/auth/RegisterHero.tsx
export default function RegisterHero() {
  return (
    <div className="max-w-md text-center">
      <div className="relative">
        <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-lg border border-white/30 shadow-2xl">
          <img
            src="/logo.png"
            alt="O-Chat Logo"
            className="w-32 drop-shadow-lg"
          />
        </div>
        <div className="absolute inset-0 w-24 h-24 bg-white/10 rounded-3xl mx-auto blur-xl -z-10"></div>
      </div>

      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        Bergabung dengan O-Chat
      </h1>

      <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
        <p className="text-lg text-white/90 leading-relaxed">
          Daftar sekarang dan mulai petualangan komunikasi Anda. Buat koneksi
          yang berarti dengan fitur chat modern yang mudah digunakan.
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-6 text-white/80 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Gratis</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span>Mudah</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <span>Instant</span>
        </div>
      </div>
    </div>
  );
}
