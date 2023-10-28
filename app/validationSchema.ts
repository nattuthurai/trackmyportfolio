import z from 'zod';

export const createUserDetailsSchema=z.object({
    firstName: z.string().min(1, 'First Name is required').max(255),
    lastName: z.string().min(1, 'Last name is required').max(255),
    email: z.string().min(1, 'Email is required').max(255),
    password: z.string().min(1, 'Password is required').max(255),
});