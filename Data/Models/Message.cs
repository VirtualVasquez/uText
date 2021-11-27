using System;

namespace Messages.Data
{
    public class Message
    {
        public string Id { get; set; }
        public string UserId {get; set;}
        public string Text {get; set;}
        public DateTime CreatedDate {get; set;}
    }
    public class User
    {
        public string Id { get; set;}
        public string Username {get;set;}
        public DateTime CreatedDate {get; set;}
    }
    public class Channels{
        public string Id {get; set;}
        public string ChannelName{get;set;}
        public DateTime CreatedDate {get; set;}
    }
}