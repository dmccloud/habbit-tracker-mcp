import { v } from "convex/values";
import { mutation, query } from "../convex/_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const setFinished = mutation({
  args: {
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    const current = await ctx.db.get(args.id);
    await ctx.db.patch(args.id, {
      isFinished: current.isFinished ? false : true,
    });
  },
});
