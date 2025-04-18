// components/CartSteps.jsx
import CartTable from "./CartTable";
import MiniCartLayout from "./MiniCartLayout";
import DateTimeSelector from "./DateTimeSelector";
import Address from "./Address";
import Payment from "./Payment";

export const CartStep0 = ({
  cartData,
  onRemove,
  onUpdateQuantity,
  totalPrice,
  discountPromo,
  loading,
}) => (
  <CartTable
    cartData={cartData || []}
    onRemove={onRemove}
    onIncrement={onUpdateQuantity}
    onDecrement={onUpdateQuantity}
    totalPrice={totalPrice}
    discountPromo={discountPromo}
    loading={loading}
  />
);

export const CartStep1 = ({
  selectedDateTimeSlot,
  setSelectedDateTimeSlot,
  cartItem,
  schedule,
}) => (
  <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot}>
    <DateTimeSelector
      cartItem={cartItem}
      selectedDateTimeSlot={selectedDateTimeSlot}
      setSelectedDateTimeSlot={setSelectedDateTimeSlot}
      schedule={schedule}
    />
  </MiniCartLayout>
);

export const CartStep2 = ({
  user,
  selectedAddress,
  setSelectedAddress,
  setAddressModal,
  selectedDateTimeSlot,
}) => (
  <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot} user={user}>
    <Address
      user={user}
      selectedAddress={selectedAddress}
      setSelectedAddress={setSelectedAddress}
      setAddressModal={setAddressModal}
    />
  </MiniCartLayout>
);

export const CartStep3 = ({
  selectedDateTimeSlot,
  selectedPaymentMethod,
  handlePaymentChange,
}) => (
  <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot}>
    <Payment
      selectedPaymentMethod={selectedPaymentMethod}
      handlePaymentChange={handlePaymentChange}
    />
  </MiniCartLayout>
);
