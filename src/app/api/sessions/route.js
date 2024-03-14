import { connectToDB } from "@/utils/database";
import Session from "@/models/session";

const sessionsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = parseInt(searchParams.get("page")) || 1;
  try {
    await connectToDB();
    const startIndex = (page - 1) * sessionsPerPage;

    const sessions = await Session.find({})
      .skip(startIndex)
      .limit(sessionsPerPage);

    return new Response(JSON.stringify(sessions), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to get the sessions", { status: 500 });
  }
};
