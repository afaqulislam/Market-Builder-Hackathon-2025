import { ProductData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

    try {
        const reqBody = await request.json();
        const { items, email }: { items: ProductData[]; email: string } = reqBody;

        const extractingItems = items.map((item: ProductData) => ({
            quantity: item?.quantity,
            price_data: {
                currency: "pkr",
                unit_amount: Math.round(item.price * 100), // Convert price to cents
                product_data: {
                    name: item?.title,
                    description: item?.description,
                    // You can include images here if needed
                },
            },
        }));

        const origin = request.headers.get("origin") || "http://localhost:3000";

        const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: extractingItems,
            mode: "payment",
            success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel/?canceled=true`,
            metadata: {
                email,
            },
        });

        return NextResponse.json({ url: session.url }, { status: 200 });
    } catch (error) {
        console.error("Stripe Error:", error);
        return NextResponse.json(
            { error: (error as Error).message || "Internal Server Error" },
            { status: 500 }
        );
    }
};