using System.Collections.Generic;

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
        public List<Message> GetAllMessages()
        {
            throw new System.NotImplementedException();
        }
        // Get all users
        public List<User> GetAllUsers()
        {
            throw new System.NotImplementedException();
        }
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