using System.Collections.Generic;

namespace Messages.Data
{
    public interface IMessageService
    {
        // Get all Messages
        List<Message> GetAllMessages();
        // Create a chat Message
        void AddMessage(Message message);
        
        // Get all users
        List<User> GetAllUsers();
        // create a user
        void AddUser(User user);
        // get a single user
        User GetUserById(int userId); 
        
        //EXTRA: get a single Message by ID
        Message GetTextById(int MessageId);
    } 
}