<<<<<<< HEAD
export const metadata = {
  title: "Home Page",
  description: "This is the HomePage of website",
};

export default function Home() {
  return <h1>Home Page</h1>;
=======
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href={"/blog"}>Blog</Link> 
      <Link href={"/products"}>Products</Link>
    </div>
  );
>>>>>>> 946d902245d5b087984f01bb528c3496ab3681f6
}
