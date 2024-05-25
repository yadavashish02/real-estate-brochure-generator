import {createClient} from '@supabase/supabase-js'
import {url, anonKey, tableName} from '../config/databaseConfig.js'

const supabase = createClient(url, anonKey)

export async function insertCopy(brandPositioning, featuresOfBuilding, tone, lengthOfCopy, generateCopy) {
    try {
        const {data, error} = await supabase
        .from(tableName)
        .insert([
            {
                positioning: brandPositioning,
                features: featuresOfBuilding,
                tone: tone,
                length: lengthOfCopy,
                output: generateCopy
            }
        ])
        if (error) {
            throw new Error("error inserting in supabase db")
        }
    } catch (error) {
        throw error
    }
    
}