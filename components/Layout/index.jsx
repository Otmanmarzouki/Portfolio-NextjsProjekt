import Header from '../Header/index';
import Sidebar from '../Sidebar/index'; 

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen  text-white" style={{
      backgroundImage: `url('/background/bgtwo.jpg')`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
    }}>
      <aside className="fixed top-0 left-0 h-full w-64 bg-black">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-64 flex flex-col">
        <div className=" mx-auto w-full pt-10 px-6">
          <Header />
        </div>
        <main className="flex-1  overflow-y-auto">
          <div className=" mx-auto w-full  pt-10 px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
