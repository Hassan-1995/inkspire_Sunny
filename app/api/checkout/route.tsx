// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil", // or your current version
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr",
            product_data: {
              name: "Cart Total",
            },
            // unit_amount: amount // in cents: 5000 = $50.00
            unit_amount: amount * 100, // it was dividing the value by 100 so i multiply it by 100
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://192.168.100.4:3000/success",
      cancel_url: "http://192.168.100.4:3000/cancel",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    // catch (error: any) {
    //   console.error('[Stripe Error]', error);
    //   return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    console.error("[Stripe Error]", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Fallback for unexpected error types
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
