'use client';

import { createContext, ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { StoreApi } from 'zustand';

import { CartStore, createCartStore } from '@/stores/cart';

export type CartStoreApi = StoreApi<CartStore>;

const CartStoreContext = createContext<CartStoreApi | undefined>(undefined);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
  const storeRef = useRef<CartStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (state: CartStore) => T): T => {
  const store = useContext(CartStoreContext);

  if (!store) {
    throw new Error('useCartStore must be used within CartStoreProvider');
  }

  return useStore(store, selector);
};
