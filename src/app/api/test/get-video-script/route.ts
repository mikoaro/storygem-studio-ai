import chatSession from "@/configs/test/AiModel";
import { NextResponse } from "next/server";

// /api/test/get-video-script
export async function POST(req: Request, res: Response) {
// export async function POST(req) {
  try {
    const { prompt } = await req.json();
    // console.log(prompt);

    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());

    return NextResponse.json(
      {
        result: JSON.parse(result.response.text()),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error + " internal server error" },
      { status: 500 }
    );
  }
}
