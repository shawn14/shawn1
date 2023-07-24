export async function POST(request) {
const text = await request.text();
console.log(text);

const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user", 
                "content": text 
            }
        ]
    })
})

const data = await response.json();
console.log(data);

return new Response(JSON.stringify(data))

}

