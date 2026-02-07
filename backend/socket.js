const socketIo = require('socket.io');
const userModel = require('./models/usermodel');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

   
    socket.on('join', async (data) => {
      const { userId, userType } = data || {};

      if (!userId) {
        console.log('join skipped: userId missing');
        return;
      }

      if (userType === 'user') {
        await userModel.findByIdAndUpdate(
          userId,
          { socketId: socket.id }
        );
      } 
      else if (userType === 'captain') {
        await captainModel.findByIdAndUpdate(
          userId,
          {
            socketId: socket.id,   
            status: 'active'
          }
        );
      }
    });

    socket.on('update-location-captain', async (data) => {
      const { userId, location } = data || {};

      if (!userId || !location?.ltd || !location?.lng) return;

      await captainModel.findByIdAndUpdate(userId, {
        location: {
          ltd: location.ltd,
          lng: location.lng
        }
      });
    });

   
    socket.on('disconnect', async () => {
      console.log(`Client disconnected: ${socket.id}`);

      await captainModel.updateMany(
        { socketId: socket.id },
        { socketId: null, status: 'inactive' }
      );
    });
  });
}


const sendMessageToSocketId = (socketId, messageObject) => {
  console.log(messageObject);

  if (io && socketId) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  }
};

module.exports = { initializeSocket, sendMessageToSocketId };
