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
    .insert([
      {
        id: crypto.randomUUID(),
        user_id: "92bee9e3-6477-466b-85d9-4029ace0266e",
        broker_name: "Broker Credentials with Extra Params",
        api_key: "super new encrypted key",
        api_secret: "super new encrypted secret",
        extra_params: {
          extra_param_1: "extra param 1",
          extra_param_2: "extra param",
        },
      },
    ])
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
