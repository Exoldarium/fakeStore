import { getProducts } from '@/app/api/getProducts';
import { SingleProduct } from '@/components/SingleProduct';

interface Props {
  params: {
    id: string;
  };
}

export const revalidate = 60;

async function Product({ params }: Props) {
  const { id } = params;

  const product = await getProducts.getSingleProduct(id);

  console.log(id, product);

  return (
    <div className="inline-block text-center justify-center py-10 px-20">
      <SingleProduct product={product} routeId={id} />
    </div>
  );
}

export default Product;
