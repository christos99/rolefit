import Link from "next/link"

export default function Sidebar () {
    return (
        <div className="" style={{}}>
            <nav style={{ display: "flex",flexDirection: "column", gap: 12, width: "10vw"}}>
                <Link href="/">Create New CV</Link>
                <Link href="/about">Previous Applications</Link>
                <Link href="/dashboard">Job Relevance Score</Link>
                <Link href="/jobs">Job Desctructuring</Link>
            </nav>
        </div>
    )
}