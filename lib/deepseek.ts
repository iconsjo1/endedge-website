type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type DeepSeekChatParams = {
  apiKey: string;
  model: string;
  system: string;
  user: string;
  maxTokens?: number;
  jsonMode?: boolean;
};

type DeepSeekConversationParams = {
  apiKey: string;
  model: string;
  messages: ChatMessage[];
  maxTokens?: number;
  jsonMode?: boolean;
};

export async function deepseekChat({
  apiKey,
  model,
  system,
  user,
  maxTokens = 700,
  jsonMode = true,
}: DeepSeekChatParams): Promise<string> {
  return deepseekConversation({
    apiKey,
    model,
    maxTokens,
    jsonMode,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });
}

export async function deepseekConversation({
  apiKey,
  model,
  messages,
  maxTokens = 500,
  jsonMode = false,
}: DeepSeekConversationParams): Promise<string> {
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
      messages,
      ...(jsonMode ? { response_format: { type: "json_object" } } : {}),
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
