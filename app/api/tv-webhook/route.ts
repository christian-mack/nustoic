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
  const body = await request.json();
  const { endpointId, secret, symbol, action } = body;

  console.log("endpointId", endpointId, secret, symbol, action);

  const { data: endpoint } = await supabase
    .from("webhook_endpoints")
    .select("agent_id, user_id, secret_value, is_active")
    .eq("id", endpointId)
    .single();

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function PUT(request: Request) {
  //   const supabase = await createClient();
  return NextResponse.json({
    status: 405,
    message: "failure",
    payload: "",
  });
}

export async function DELETE(request: Request) {
  //   const supabase = await createClient();
  return NextResponse.json({
    status: 405,
    message: "success",
    payload: "",
  });
}
