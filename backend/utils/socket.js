import { Server } from "socket.io";

let io;
const userSocketMap = {}; // Maps userId -> socketId

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173", "https://hirehub-snowy-rho.vercel.app"],
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        const userId = socket.handshake.query.userId;
        if (userId && userId !== "undefined") {
            userSocketMap[userId] = socket.id;
            console.log(`User connected: SocketID ${socket.id} for UserID ${userId}`);
        }

        socket.on("disconnect", () => {
            if (userId) {
                delete userSocketMap[userId];
                console.log(`User disconnected: SocketID ${socket.id} for UserID ${userId}`);
            }
        });
    });

    return io;
};

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

export const getIo = () => {
    if (!io) {
        throw new Error("Socket.io has not been initialized!");
    }
    return io;
};
