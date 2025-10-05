import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
<<<<<<< HEAD
  return {
    title: `Product ${id}`,
  };
};

=======
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};
>>>>>>> 946d902245d5b087984f01bb528c3496ab3681f6
export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
