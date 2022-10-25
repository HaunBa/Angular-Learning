using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AuthorizationAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CustomersController : ControllerBase
  {
    [HttpGet, Authorize( Roles = "Admin")]
    public IEnumerable<string> Get()
    {
      return new string[] { "John Doe", "Jane Doe" };
    }
  }
}
