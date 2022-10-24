using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RoutingAPI.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  public class ProductController : ControllerBase
  {
    public ProductController()
    {

    }

    [HttpGet]
    public List<Product>? GetAllProducts()
    {
      Console.WriteLine("Sent all Products");
      return ProductService.GetProductsFromFile();
    }

    [HttpGet]
    public Product? GetProductById(int id)
    {
      return ProductService.GetProductsFromFile()?.FirstOrDefault(x => x.id == id);
    }

    [HttpPost]
    public IActionResult AddProduct([FromBody]Product product)
    {
      Console.WriteLine("Added product");

      return Ok();
    }
  }
}
