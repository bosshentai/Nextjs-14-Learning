export const dynamic = "force-dynamic"

export async function GET() {
  // return new Response("Get handler")
  // return new Date().toLocaleTimeString();
  return Response.json({
    time: new Date().toLocaleTimeString()
  }
  )
}
