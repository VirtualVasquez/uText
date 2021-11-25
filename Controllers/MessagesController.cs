using Messages.Data;
using Microsoft.AspNetCore.Mvc;

namespace Messages.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController: Controller
    {
        private IMessageService _service;
        public MessagesController(IMessageService service)
        {
            this._service = service;
        }

        // Get all Messages
        [HttpGet("GetMessages")]
        public IActionResult GetMessages()
        {
            var allMessages = _service.GetAllMessages();
            return Ok(allMessages);
        }
        
        // Get all Users
        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            var allUsers = _service.GetAllUsers();
            return Ok(allUsers);
        }

        // get a single user
        [HttpGet("GetUserById/{userId}")]
        public IActionResult GetUserById(string userId)
        {
            var oneUser= _service.GetUserById(userId);
            return Ok(oneUser);
        }
        // Create a chat Message
        [HttpPost("AddMessage")]
        public IActionResult AddMessage([FromBody]Message message)
        {
            if(message != null)
            {
                _service.AddMessage(message);
            }
            return Ok();
        }

        // create a user
        [HttpPost("AddUser")]
        public IActionResult AddUser([FromBody]User user)
        {
            if(user != null)
            {
                _service.AddUser(user);
            }
            return Ok();
        } 
    }
}