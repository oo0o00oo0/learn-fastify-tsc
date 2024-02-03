import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
	console.log(request, "hi");
	return "pong\n";
});

server.listen({ port: 8080 }, (err, address) => {
	console.log("bye");
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`, "nodemon");
});
