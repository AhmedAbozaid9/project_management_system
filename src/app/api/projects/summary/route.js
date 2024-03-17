import { connectToDB } from "@/utils/database";
import Project from "@/models/project";

const getStatusCount = async (status) => {
  try {
    const result = await Project.aggregate([
      {
        $match: { status: status },
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

export const GET = async () => {
  try {
    await connectToDB();

    const notStarted = await getStatusCount("Not started");
    const inProgress = await getStatusCount("In progress");
    const done = await getStatusCount("Done");

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
