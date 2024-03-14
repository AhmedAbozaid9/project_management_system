import { connectToDB } from "@/utils/database";
import Session from "@/models/session";

export const GET = async () => {
  try {
    await connectToDB();
    const sessions = await Session.find({});
    return new Response(JSON.stringify(sessions), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to get the sessions", { status: 500 });
  }
};
