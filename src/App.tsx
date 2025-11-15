import { useAuth } from "./hooks/useAuth";
import Chat from "./components/Chat";

export default function App() {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-4">
      {user ? (
        <>
          <div className="flex items-center gap-3 mb-4">
            <img src={user.photoURL!} className="w-10 h-10 rounded-full" />
            <p className="font-semibold">{user.displayName}</p>
            <button onClick={logout} className="ml-auto text-red-500">
              Logout
            </button>
          </div>

          <Chat />
        </>
      ) : (
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
