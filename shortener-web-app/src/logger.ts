export type LogLevel = "INFO" | "DEBUG" | "WARN" | "ERROR";

export interface LogPayload {
  stack: string;
  level: LogLevel;
  package: string;
  message: string;
}

export const log = async ({ stack, level, package: pkg, message }: LogPayload): Promise<void> => {
  try {
    const response = await fetch("https://your-test-server-url.com/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const result = await response.json();
    console.log(`[${level}] - ${pkg}: ${message}`);
    console.log("Server response:", result);
  } catch (error) {
    console.error("Failed to send log:", error);
  }
};
