import { useAuth } from "./hooks/useAuth";

export default function App() {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
          <img
            src={user.photoURL || ""}
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
