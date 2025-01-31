
import zod from 'zod';

export const LoginSchema = zod.object({
    email: zod.string().email().min(3,'Email is too short'),
    password: zod.string(),
});
export const SignupSchema = zod.object({
    username: zod.string().min(3,'Username is too short'),
    email: zod.string().email().min(3,'Email is too short'),
    password: zod.string(),
})