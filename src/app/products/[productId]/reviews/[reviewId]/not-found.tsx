"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>Review Not Found</h1>
      <h2>
        Could Not Find Review {reviewId} for Product {productId}
      </h2>
    </div>
  );
}
