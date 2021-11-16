using System.Collections.Generic;

namespace Messages.Data
{
    public static class Data
    {
        public static List<Message> Messages => allMessages;
        static List<Message> allMessages = new List<Message>()
        {
            new Message()
            {
                Id=1,
                Text="Hello there",
                Username="Jerry"
            },
            new Message()
            {
                Id=2,
                Text="Hello to you too",
                Username="George"
            }
        };
        public static List<User> Users => allUsers;
        static List<User> allUsers = new List<User>()
        {
            new User()
            {
                Id=1,
                Username="Jerry"
            },
            new User()
            {
                Id=2,
                Username="George"
            },
            new User()
            {
                Id=3,
                Username="Kramer"
            },
            new User()
            {
                Id=4,
                Username="Elaine"
            },
            new User()
            {
                Id=5,
                Username="Newman"
            }
        };
    }
}