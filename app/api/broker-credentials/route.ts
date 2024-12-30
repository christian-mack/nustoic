import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // fetch authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // verify user is authenticated
  if (!user) {
    return NextResponse.json("User not authenticated", { status: 401 });
  }

  // fetch broker credentials
  let { data: broker_credentials, error } = await supabase
    .from("broker_credentials")
    .select()
    .eq("user_id", user.id);

  // handle error
  if (error) {
    return NextResponse.json({ status: 500, error });
  }

  // handle no broker credentials found
  if (!broker_credentials || broker_credentials.length === 0) {
    return NextResponse.json({
      status: 204,
      message: "No broker credentials found",
    });
  }

  // return broker credentials
  return NextResponse.json({
    status: 200,
    message: "success",
    payload: broker_credentials,
  });
}

export async function POST(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // fetch authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // verify user is authenticated
  if (!user) {
    return NextResponse.json("User not authenticated", { status: 401 });
  }

  // insert broker credentials
  const { data, error } = await supabase
    .from("broker_credentials")
    .insert([{ ...request.body }])
    .select();

  // handle error
  if (error) {
    return NextResponse.json({ status: 500, error });
  }

  // return success
  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function PUT(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // fetch authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // verify user is authenticated
  if (!user) {
    return NextResponse.json("User not authenticated", { status: 401 });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}

export async function DELETE(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // fetch authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // verify user is authenticated
  if (!user) {
    return NextResponse.json("User not authenticated", { status: 401 });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: "",
  });
}
