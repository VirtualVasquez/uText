using System;

namespace Messages.Data
{
    public class Message
    {
        public int Id { get; set; }
        public string Text {get; set;}
        public string Username {get; set;}
    }
    public class User
    {
        public int Id { get; set;}
        public string Username {get;set;}

    }
}