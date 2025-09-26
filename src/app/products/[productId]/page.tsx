import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
}
