import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();

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

  // retrieve all the alert logs for the authenticated user
  let { data: alert_logs, error } = await supabase
    .from("alert_logs")
    .select("*")
    .eq("id", "here");

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
    payload: alert_logs,
  });
}

export async function DELETE(request: Request) {
  const supabase = await createClient();

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
  const { data: alert_log, error } = await supabase
    .from("alert_logs")
    .delete()
    .eq("id", "here");

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
    payload: alert_log,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    status: 405,
    message: "Method Not Allowed",
    payload: "",
  });
}

export async function PUT(request: Request) {
  return NextResponse.json({
    status: 405,
    message: "Method Not Allowed",
    payload: "",
  });
}
