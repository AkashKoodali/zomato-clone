import joi from "joi";

export const ValidateOrderDetails = (orderDetails) => {
  const Schema = joi.object({
    food: joi
      .array()
      .items(
        joi.object({
          details: joi.string().hex().length(24),
          quantity: joi.number().required(),
        })
      ),
    paymode: joi.string().required(),
    status: joi.string().required(),
    paymentDetails: joi.number().required(),
    promo: joi.string().required(),
    tax: joi.string().required(),
    razorpay_payment_id: joi.string().required(),
  });

  return Schema.validateAsync(orderDetails);
};
