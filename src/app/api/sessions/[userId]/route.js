import { connectToDB } from "@/utils/database";
import Session from "@/models/session";

const sessionsPerPage = 20;

const getTotalTime = async (userId) => {
  try {
    const result = await Session.aggregate([
      {
        $match: {
          user: userId,
        },
      },
      {
        $group: {
          _id: null,
          totalTime: { $sum: "$time" },
        },
      },
    ]);

    if (result.length > 0) {
      const totalTime = result[0].totalTime;
      return totalTime;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, { params }) => {
  const userId = params.userId;
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = parseInt(searchParams.get("page")) || 1;
  try {
    await connectToDB();

    const totalTime = await getTotalTime(userId);

    const totalCount = await Session.find({ user: userId }).countDocuments();

    const startIndex = (page - 1) * sessionsPerPage;
    const sessions = await Session.find({ user: userId })
      .skip(startIndex)
      .limit(sessionsPerPage)
      .populate("project");

    return new Response(JSON.stringify({ sessions, totalTime, totalCount }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response("Failed to get the sessions", { status: 500 });
  }
};
