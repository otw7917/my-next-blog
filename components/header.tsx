import Link from "next/link";

function Header() {
  return (
    <header className='fixed w-full h-14 bg-slate-300'>
      <div className='h-full mx-10 flex justify-between items-center'>
        <div className='h-full flex items-center'>
          <Link href='/' className='h-full flex items-center'>
            <h1> 500 story</h1>
          </Link>
        </div>
        <nav className='h-full'>
          <ul className='h-full flex items-center space-x-4'>
            <li className='font-bold h-full flex items-center'>
              <Link href={"about"}>about</Link>
            </li>
            <li className='font-bold h-full flex items-center'>
              <Link href={"posts"}>Posts</Link>
            </li>
            <li className='h-full flex items-center'>
              <button>darkmode</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
