# Optional Cleanup Steps

## Dependencies Cleanup (Optional)

The following packages are **no longer actively used** for authentication but are still in `package.json`:

### Can Be Removed (Optional):
- `next-auth` (5.0.0-beta.29) - No longer used for authentication
- `@auth/core` (^0.40.0) - Dependency of next-auth
- `bcryptjs` (^3.0.2) - Still used in `prisma/seed.ts` but not for active auth

### Keep or Remove?

**Option 1: Keep Them** (Recommended)
- No harm in keeping them
- Easier to revert if needed
- `bcryptjs` is still used in seed script
- No performance impact

**Option 2: Remove Them**
If you want to clean up:

```bash
npm uninstall next-auth @auth/core
```

Then update `prisma/seed.ts` to either:
1. Remove the admin user creation section (lines 225-258)
2. Or replace bcrypt with plain text password (not recommended for production)

### Database Schema Cleanup (Optional)

The `User` table in Prisma schema is **no longer used** for authentication but still exists.

**Keep or Remove?**

**Option 1: Keep It** (Recommended)
- Harmless to keep
- Easy to revert to complex auth if needed
- Can be used for other purposes (blog comments, etc.)

**Option 2: Remove It**
Only if you're absolutely sure you don't need it:

1. Remove from `prisma/schema.prisma`:
```prisma
model User {
  id           String   @id @default(cuid())
  name         String
  email        String   @unique
  passwordHash String
  role         String   @default("user")
  active       Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

2. Run migration:
```bash
npx prisma migrate dev --name remove_user_table
```

3. Remove admin user creation from `prisma/seed.ts` (lines 225-258)

---

## Recommendation

**Do Nothing!** 🎉

The current setup is clean and works perfectly:
- Simple authentication is active
- Old packages don't interfere
- Easy to revert if needed
- Database schema is still valid

Only clean up if you're absolutely certain you won't need NextAuth or database authentication in the future.
