import Header from '../Header/index';
import Sidebar from '../Sidebar/index';


export default function Layout({ children }) {
  return (
    <div
      className="flex min-h-screen text-white"
      style={{
        backgroundImage: `url('/background/bgtwo.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col w-full p-4">
        <div className=" flex justify-end p-6">
          <Header />
        </div>
        <main className="flex flex-col lg:flex-row gap-10 p-6 mx-auto max-w-7xl">
          <Sidebar/> 
         {children}
        </main>
      </div>
    </div>
  );
}
