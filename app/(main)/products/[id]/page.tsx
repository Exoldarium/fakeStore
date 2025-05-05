import { getProducts } from '@/app/api/getProducts';

interface Props {
  params: {
    id: string;
  };
}

export const revalidate = 600;

export async function generateStaticParams() {
  const products = await getProducts.getAllProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function Product({ params }: Props) {
  const { id } = params;

  const product = await getProducts.getSingleProduct(id);

  console.log(id, product);

  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
}

export default Product;
