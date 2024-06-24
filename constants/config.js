const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://chat-app-frontend-2wz3q2uod-abhaysingh245s-projects.vercel.app/",
     process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
