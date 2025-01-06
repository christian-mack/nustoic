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
  let requestData;
  try {
    const rawBody = await request.text();
    requestData = JSON.parse(rawBody);
  } catch (error: any) {
    console.error("Error parsing JSON:", error.message);
    return NextResponse.json({
      status: 400,
      message: "Invalid JSON",
      payload: error.message,
    });
  }

  if (requestData) {
    console.log("Request data after try-catch:", requestData);
  } else {
    console.log("Request data is undefined or null");
  }

  // create supabase client
  const supabase = await createClient();

  // // fetch authenticated user
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // // verify user is authenticated
  // if (!user) {
  //   return NextResponse.json("User not authenticated", { status: 401 });
  // }

  // insert broker credentials
  const { data, error } = await supabase
    .from("broker_credentials")
    .insert([{ ...requestData }])
    .select();

  // handle error
  if (error) {
    return NextResponse.json({ status: 500, error });
  }

  // return success
  return NextResponse.json({
    status: 200,
    message: "success",
    payload: data,
  });
}

export async function PUT(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // // fetch authenticated user
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // // verify user is authenticated
  // if (!user) {
  //   return NextResponse.json("User not authenticated", { status: 401 });
  // }

  // update broker credentials
  const { data, error } = await supabase
    .from("broker_credentials")
    .update({
      api_key: "updated encrypted key",
      api_secret: "updated encrypted secret",
    })
    .eq("id", "ce171e75-e2b1-4007-8628-5e9884d9b2a5");

  // handle error
  if (error) {
    return NextResponse.json({ status: 500, error });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: data,
  });
}

export async function DELETE(request: Request) {
  // create supabase client
  const supabase = await createClient();

  // // fetch authenticated user
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // // verify user is authenticated
  // if (!user) {
  //   return NextResponse.json("User not authenticated", { status: 401 });
  // }

  // delete broker credentials entry
  const { data, error } = await supabase
    .from("broker_credentials")
    .delete()
    .eq("id", "3a5013b1-4a68-407c-adc2-e8e2ab15e0b4");

  // handle error
  if (error) {
    return NextResponse.json({ status: 500, error });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: data,
  });
}
