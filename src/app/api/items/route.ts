export async function GET(){
    return Response.json([
        {'title':'Nokia Mobile'},
        {'title':'Samsung Mobile'}
    ])
}

export async function POST(){
    return Response.json({message:"Message sent for POST"})
}