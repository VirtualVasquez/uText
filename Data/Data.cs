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
    }
}