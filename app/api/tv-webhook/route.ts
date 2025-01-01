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

  // Insert the alert log into the database
  const { data, error } = await supabase
    .from("alert_logs")
    .insert([
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        user_id: "92bee9e3-6477-466b-85d9-4029ace0266e",
        broker_id: "0fe95a99-4e51-4040-92fa-208296a6444e",
        alert_payload: {
          symbol: "AAPL",
          price: 150.25,
          action: "buy",
          quantity: 10,
        },

        action: "triggered",
        quantity: 10,
        status: "completed",
        broker_response: {
          status: "success",
          transaction_id: "1234567890",
        },

        created_at: "2023-10-01T12:00:00Z",
      },
    ])
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
