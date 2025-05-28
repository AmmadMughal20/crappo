import dbConnect from "@/lib/dbContext";
import SubscriptionModel from "@/models/subscriptions";
import { subscriptionSchema } from "@/schemas/subscription";
import { NextResponse } from "next/server";

export async function POST(request: Request)
{
    try
    {
        await dbConnect();

        const body = await request.json();
        const parsedData = subscriptionSchema.safeParse(body);

        if (!parsedData.success)
        {
            const emailError = parsedData.error.format().email?._errors || [];
            if (emailError)
            {
                return NextResponse.json(
                    { error: emailError },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { error: parsedData.error.errors },
                { status: 400 }
            );
        }

        const subscriptionData = parsedData.data;
        const existingSubscription = await SubscriptionModel.findOne({
            email: subscriptionData.email,
        });

        if (existingSubscription)
        {
            return NextResponse.json(
                { error: "Subscription already exists" },
                { status: 409 }
            );
        }

        const newSub = {
            email: subscriptionData.email,
            status: "active", // Default status
            startDate: new Date(), // Current date as start date
            endDate: null, // No end date initially
        }

        const newSubscription = new SubscriptionModel(newSub);
        await newSubscription.save();

        return NextResponse.json(newSubscription, { status: 201 });
    } catch (error)
    {
        console.error("Error creating subscription:", error);
        return NextResponse.json(
            { error: "Failed to create subscription" },
            { status: 500 }
        );
    }
}
