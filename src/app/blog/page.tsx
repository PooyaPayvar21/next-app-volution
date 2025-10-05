<<<<<<< HEAD
export const metadata = {
  title: "Blog",
  description: "This the BlogPage of the website",
=======
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
>>>>>>> 946d902245d5b087984f01bb528c3496ab3681f6
};

export default function Blog() {
  return <h1>Blog Page</h1>;
}
