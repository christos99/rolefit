'use client'


import Link from "next/link"
import { IoIosLogOut } from "react-icons/io";

function handleClick () { 
  console.log('Button Clicked')
}

export default function Header () {
    return (
        <header style={{ padding: 16, borderBottom: "1px solid #eaeaea" }}>
          <nav className="flex flex-row items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/jobs">Jobs</Link>
            <button className="flex flex-row ms-auto" onClick={handleClick}>
              <IoIosLogOut/>
            </button>
          </nav>
      </header>
    )
}