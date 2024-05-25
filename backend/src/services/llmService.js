import axios from 'axios'
import {url, bearerToken, providers, temperature, maxTokens, fallbackProviders} from '../config/llmConfig.js'

function _getGeneratePrompt(tone, lengthOfCopy, featuresOfBuilding, brandPositioning) {
    return `You are a copywriter at a marketing agency working on a brochure for a real estate developer.
Generate a narrative flow for the real estate brochure keeping in mind the brand positioning and features of the property.
ONLY give output and nothing else!

<BRAND POSITIONING>
${brandPositioning}
</BRAND POSITIONING>

<FEATURES OF PROPERTY>
${featuresOfBuilding}
</FEATURES OF PROPERTY>

Keep the tone of the narrative as ${tone}

Make sure that the length of the copy is ${lengthOfCopy}
`
}

export async function generateCopy(tone, lengthOfCopy, featuresOfBuilding, brandPositioning) {
    const prompt = _getGeneratePrompt(tone, lengthOfCopy, featuresOfBuilding, brandPositioning)
    const options = {
        method: "Post",
        url: url,
        headers: {
            authorization: bearerToken
        },
        data: {
            providers: providers,
            text: prompt,
            temperature: temperature,
            max_tokens: maxTokens,
            fallback_providers: fallbackProviders
        },
    }

    try {
        const response = await axios.request(options)
    
        const providerResponse = response.data.providers
        const fallbackProviderResponse = response.data.fallbackProviders

        if (providerResponse && providerResponse.status === 'success') {
            return providerResponse.generated_text
        }
        else if (fallbackProviderResponse && fallbackProviderResponse.status === 'success') {
            return fallbackProviderResponse.generated_text
        }
        else {
            throw Error("eden api error")
        }
    } catch (error) {
        throw error
    }
    
}