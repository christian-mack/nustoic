import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: Request) {
  const supabase = await createClient();

  // retrieve all the alert logs from the database
  let { data: alert_logs, error } = await supabase
    .from("alert_logs")
    .select("*");

  // handle error
  if (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      payload: error,
    });
  }

  return NextResponse.json({
    status: 405,
    message: "success",
    payload: alert_logs,
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

  const supabase = await createClient();

  // // Authenticate the current user
  // const {
  //   data: { user },
  //   error: err,
  // } = await supabase.auth.getUser();

  // // End the request if the user is not authenticated or an error occurred
  // if (!user) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "Unauthorized",
  //     payload: "No user is authenticated",
  //   });
  // } else if (err) {
  //   return NextResponse.json({
  //     status: 500,
  //     message: "Internal Server Error",
  //     payload: err,
  //   });
  // }

  // const data = { test: "test" };

  // Insert the alert log into the database
  const { data, error } = await supabase
    .from("alert_logs")
    .insert([{ ...requestData }])
    .select();

  // End the request if an error occurred
  if (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      payload: error,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: data,
  });
}

export async function DELETE(request: Request) {
  const supabase = await createClient();

  const { body } = request;

  console.log(body);

  //   // Authenticate the current user
  // const {
  //   data: { user },
  //   error: err,
  // } = await supabase.auth.getUser();

  // // End the request if the user is not authenticated or an error occurred
  // if (!user) {
  //   return NextResponse.json({
  //     status: 401,
  //     message: "Unauthorized",
  //     payload: "No user is authenticated",
  //   });
  // } else if (err) {
  //   return NextResponse.json({
  //     status: 500,
  //     message: "Internal Server Error",
  //     payload: err,
  //   });
  // }

  // Delete the alert log from the database
  const { data, error } = await supabase
    .from("alert_logs")
    .delete()
    .eq("id", "");

  // End the request if an error occurred
  if (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      payload: error,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: data,
  });
}

export async function PUT(request: Request) {
  return NextResponse.json({
    status: 405,
    message: "Method not allowed",
    payload: "",
  });
}
