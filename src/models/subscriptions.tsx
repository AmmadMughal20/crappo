import mongoose, { Schema, Document } from "mongoose";

export interface ISubscription extends Document
{
    email: string;
    status: string; // e.g., 'active', 'canceled'
    startDate: Date;
    endDate: Date;
}

const SubscriptionSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    status: { type: String, required: true, enum: ['active', 'canceled'] },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date }
});

const SubscriptionModel = (mongoose.models.Subscription as mongoose.Model<ISubscription>) || mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

export default SubscriptionModel;