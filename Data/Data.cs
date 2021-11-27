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
                Id="1",
                Text="Hello there",
                UserId="A"
            },
            new Message()
            {
                Id="2",
                Text="Hello to you too",
                UserId="B"
            }
        };
        public static List<User> Users => allUsers;
        static List<User> allUsers = new List<User>()
        {
            new User()
            {
                Id="A",
                Username="Jerry"
            },
            new User()
            {
                Id="B",
                Username="George"
            },
            new User()
            {
                Id="C",
                Username="Kramer"
            },
            new User()
            {
                Id="D",
                Username="Elaine"
            },
            new User()
            {
                Id="E",
                Username="Newman"
            }
        };
    }
}