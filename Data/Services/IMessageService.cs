using System.Collections.Generic;

namespace Messages.Data
{
    public interface IMessageService
    {
        // Get all Messages
        List<Message> GetAllMessages();

        // Get all users
        List<User> GetAllUsers();

        // get a single user
        User GetUserById(string userId);

        // Create a chat Message
        void AddMessage(Message message); 

        // create a user
        void AddUser(User user);
        
        
        //EXTRA: get a single Message by ID
    } 
}