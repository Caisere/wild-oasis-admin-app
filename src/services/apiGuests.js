import { GUESTS_SIZE } from "../utils/constant"
import supabase from "./supabase"


export async function getGuests (page) {
    // console.log(page)
    let query = supabase
    .from('guest')
    .select('*', {count: 'exact'})


    let from = (page - 1) * GUESTS_SIZE // when page is 1 (1-1) * 10 = 0, when page is 2 (2-1) * 10 = 10 
    let to = from + GUESTS_SIZE - 1 // when from = 0 (0 + 10 - 1) = 9, when from = 10, (10 + 10 - 1) = 19


    if(page) query = query.range(from, to)

    const { data, count, error  } = await query
        
    if (error) {
        throw new Error('Could not fetch guests')
    }
    

    // console.log(data, count)

    return {data, count}
}


export async function getGuest(id) {
    const { data, error } = await supabase
        .from("guest")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error(error);
        throw new Error("Guest not found");
    }

    // console.log(data)
    return data;
}