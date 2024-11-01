import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});



export const add = mutation({
  args: { text: v.string() },
  handler: async ({ db }, { text }) => {
    await db.insert("tasks", { text });
  }
});
