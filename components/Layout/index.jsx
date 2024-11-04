import Header from '../Header/index';
import Sidebar from '../Sidebar/index'; 

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <aside className="fixed top-0 left-0 h-full w-64 bg-black">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-64 flex flex-col">
        <div className="container mx-auto w-full max-w-5xl pt-10 px-6">
          <Header />
        </div>
        <main className="flex-1 p-5 overflow-y-auto">
          <div className="container mx-auto w-full max-w-5xl pt-10 px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
