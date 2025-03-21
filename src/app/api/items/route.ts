export async function GET(req:any){
    const type = req.nextUrl.searchParams.get('type')
    console.log("Type: ",type)
    return Response.json([
        {'title':'Nokia Mobile'},
        {'title':'Samsung Mobile'}
    ])
}

export async function POST(req:any){
    const body = await req.json()
    console.log(body)
    return Response.json({message:"Message sent for POST"})
}