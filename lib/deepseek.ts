type DeepSeekChatParams = {
  apiKey: string;
  model: string;
  system: string;
  user: string;
  maxTokens?: number;
};

export async function deepseekChat({
  apiKey,
  model,
  system,
  user,
  maxTokens = 700,
}: DeepSeekChatParams): Promise<string> {
  const baseUrl = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`DeepSeek API error ${response.status}: ${detail}`);
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };

  return data.choices?.[0]?.message?.content?.trim() ?? "";
}
