import { usePreference } from '@/contexts/preference';
import { Checkout } from '@/models/Checkout';
import { Order } from '@/models/Order';
import { checkoutService } from '@/services/checkout/CheckoutServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateCheckout() {
  const queryClient = useQueryClient();
  const { setPreference } = usePreference();

  return useMutation({
    mutationFn: (order: Order) => checkoutService.createCheckout(order),
    onSuccess: (data: Checkout) => {
      setPreference({
        preferenceId: data.preferenceId,
        initPoint: data.initPoint,
      });
    },
  });
}
