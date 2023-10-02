import Link from "next/link"

const Nav = () => {
  return (
    <nav className="w-full bg-red-500 text-white p-4 flex justify-between items-center">
        <Link href="/" className="">Marvel Universe</Link>
        <div className="flex gap-4 justify-center items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        </div>
    </nav>
  )
}

export default Nav