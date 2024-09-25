import { URLSearchParams } from "url";
import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

const getStatusCount = async (status, userId) => {
  try {
    const result = await Project.aggregate([
      {
        $match: { status: status, userId },
      },
      {
        $group: {
          _id: null,
          totalcount: { $sum: 1 },
        },
      },
    ]);

    if (result.length > 0) {
      const totalCount = result[0].totalcount;
      return totalCount;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const userId = searchParams.get("userId");
  console.log(userId);
  try {
    await connectToDB();

    const notStarted = await getStatusCount("Not started", userId);
    const inProgress = await getStatusCount("In progress", userId);
    const done = await getStatusCount("Done", userId);

    return new Response(JSON.stringify({ notStarted, inProgress, done }), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response("Failed to get the summary of projects", {
      status: 500,
    });
  }
};
