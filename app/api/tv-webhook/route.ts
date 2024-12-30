import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function POST(request: Request) {
  const supabase = await createClient();

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function PUT(request: Request) {
  const supabase = await createClient();

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function DELETE(request: Request) {
  const supabase = await createClient();

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}
