import { z } from 'zod';

export const subscriptionSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    // status: z.enum(['active', 'inactive', 'canceled']),
    // startDate: z.date(),
    // endDate: z.date().nullable(),
});