using System.Collections.Generic;
using System.Linq;

namespace Messages.Data
{
    public class MessageService : IMessageService
    {
        // Get all Messages
        public List<Message> GetAllMessages() => Data.Messages.ToList();

        // Get all users
        public List<User> GetAllUsers() => Data.Users.ToList();

        public User GetUserById(string userId) => Data.Users.FirstOrDefault( n =>n.Id == userId);
        
        // Create a chat Message
        public void AddMessage(Message message)
        {
            Data.Messages.Add(message);
        }
        // create a user
        public void AddUser(User user)
        {
            Data.Users.Add(user);
        }
        // get a single user
    }
}