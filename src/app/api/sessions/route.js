import { connectToDB } from "@/utils/database";
import Session from "@/models/session";

export const POST = async (request) => {
  const sessionDetails = await request.json();

  try {
    connectToDB();
    const newSession = new Session(sessionDetails);
    await newSession.save();
    return new Response(JSON.stringify(sessionDetails), { status: 201 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to save the session", { status: 500 });
  }
};
