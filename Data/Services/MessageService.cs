using System.Collections.Generic;
using System.Linq;

namespace Messages.Data
{
    public class MessageService : IMessageService
    {
        // Create a chat Message
        public void AddMessage(Message message)
        {
            Data.Messages.Add(message);
        }
        // create a user
        public void AddUser(User user)
        {
            throw new System.NotImplementedException();
        }


        // Get all Messages
        public List<Message> GetAllMessages() => Data.Messages.ToList();


        // Get all users
        public List<User> GetAllUsers() => Data.Users.ToList();

        //EXTRA: get a single Message by ID
        public Message GetTextById(int MessageId)
        {
            throw new System.NotImplementedException();
        }
        // get a single user
        public User GetUserById(int userId)
        {
            throw new System.NotImplementedException();
        }
    }
}