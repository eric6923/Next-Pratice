import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">Dashboard</Link> <br />
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
}
