import { createSClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const supabase = createSClient();
  const body = await request.json();
  
  const { data, error } = await supabase.auth.signInWithPassword(body);
  
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
  return NextResponse.json({message:"Login Succesfully"})
}
