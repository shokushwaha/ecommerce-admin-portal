import Customer from "@models/customer";
import { connectToDB } from '@lib/mongoose';
export const GET = async (req) => {

    try {
        await connectToDB()
        const data = await Customer.find()
        return new Response(JSON.stringify(data), { status: 201 })
    }
    catch (err) {
        console.log(err.message)
        return new Response(JSON.stringify(err), { status: 501 })
    }
}