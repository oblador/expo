import GridTileImage from './tile';
import { getCollectionProducts } from '../../lib/shopify';
import type { Product } from '../../lib/shopify/types';
import { Link } from 'expo-router';

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  if (process.env.EXPO_OS === 'web') {
    return (
      <div
        className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}>
        <Link
          className="relative block aspect-square h-full w-full"
          href={`/product/${item.handle}`}>
          <GridTileImage
            src={item.featuredImage.url}
            sizes={
              size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
            }
            alt={item.title}
            label={{
              position: size === 'full' ? 'center' : 'bottom',
              title: item.title as string,
              amount: item.priceRange.maxVariantPrice.amount,
              currencyCode: item.priceRange.maxVariantPrice.currencyCode,
            }}
          />
        </Link>
      </div>
    );
  }
  return (
    <Div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}>
      <Link
        asChild
        className="relative web:block aspect-square h-full w-full"
        href={`/product/${item.handle}`}>
        <TouchableOpacity>
          <GridTileImage
            src={item.featuredImage.url}
            sizes={
              size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
            }
            dom={{
              style: {
                width: '100%',
                height: 148,
                backgroundColor: 'orange',
              },
            }}
            alt={item.title}
            label={{
              position: size === 'full' ? 'center' : 'bottom',
              title: item.title as string,
              amount: item.priceRange.maxVariantPrice.amount,
              currencyCode: item.priceRange.maxVariantPrice.currencyCode,
            }}
          />
        </TouchableOpacity>
      </Link>
    </Div>
  );
}

import { Div } from '@expo/html-elements';
import { TouchableOpacity } from '../../lib/react-native';

import ThreeInner from './three-inner';
export function ThreeItemGrid({ products }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items',
  // });

  // if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  return (
    <ThreeInner
      products={products}
      dom={{
        style: {
          flex: 1,
          minHeight: 560,
        },
      }}
    />
  );
}
