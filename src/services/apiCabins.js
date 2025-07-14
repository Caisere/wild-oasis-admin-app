import supabase, { supabaseUrl } from "./supabase";


// function to load all bookings
export async function getBookings({filter}) {

    let query = supabase
    .from('bookings')
    .select('*, cabins(name), guest(email,fullName)')

    if (filter !== null) query.eq(filter.field, filter.value)

    const {data, error} = await query
    // eq. equal
    if(error) {
        console.error(error);
        throw new Error('cabins could not be loaded')
    }

    return data
}

// funtion to load cabins from supabase
export async function getCabins () {
    const { data, error } = await supabase
    .from('cabins')
    .select('*')

    if(error) {
        console.error(error);
        throw new Error('cabins could not be loaded')
    }

    return data
}


// funtion to delete cabins
export async function deleteCabins(id) {
    const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

    if(error) {
        console.error(error);
        throw new Error('cabins could not be deleted')
    }

    return data // !!!!!!!
}


//function that perform creating and editing of cabin 
export async function createEditCabin(newCabin, id) {
    // console.log(newCabin)

    // checking if cabin image already exist for edit(if already exist(true), the url will Definitely start with supabase url) and creating of cabin
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');     
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`

    // saving endpoint for reusability
    let query = supabase.from('cabins')

    // create new cabin in no id(which means it's not an edit or update action) else if there is an id (the action is editing action)
    if(!id) 
        query = query
        .insert([
            {
                ...newCabin, 
                image: imagePath
            }
        ])

        // editing action API request
        if (id)
            //
            query = query
            .update({...newCabin, image: imagePath})
            .eq('id', id)

    // data or error for the instance based on the condition met
    const { data, error } = await query.select().single()

    if(error) {
        console.error(error);
        throw new Error('cabins could not be created')
    }

    
    //if there is no error with the form submission to create cabin upload the image.
    if (hasImagePath) return data
    const { error: storageError } = await supabase.storage
        .from('cabin-images')
        .upload(`${imageName}`, newCabin.image)

    // if there is an error with the cabin image upload, delete the corresponding cabin
    if(storageError) {
        await supabase.from('cabins').delete()
        .eq('id', data.id)
        throw new Error('Cabin image could not be uploaded and cabin was not created')
    }

    return data 
}