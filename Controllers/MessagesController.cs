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

        [HttpGet("GetMessages")]
        public IActionResult GetMessages()
        {
            var allMessages = _service.GetAllMessages();
            return Ok(allMessages);
        }
        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            var allMessages = _service.GetAllUsers();
            return Ok(allMessages);
        }

        // [HttpPost("AddMessage")]
        // public IActionResult AddMessage([FromBody]Message message)
        // {
        //     if(message != null)
        //     {
        //         _service.AddMessage(message);
        //     }
        //     return Ok();
        // } 
    }
}