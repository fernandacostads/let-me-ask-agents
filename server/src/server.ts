import fastifyCors from "@fastify/cors";
// import { sql } from "./db/connection.ts";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { createRoomsRoute } from "./http/routes/create-rooms.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { getRoomQuestionRoute } from "./http/routes/get-rooms-questions.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
  return { message: "Hello, world! Its ok" };
});

app.register(getRoomsRoute);
app.register(createRoomsRoute);
app.register(getRoomQuestionRoute);
app.register(createQuestionRoute);

app.listen({ port: env.PORT });
