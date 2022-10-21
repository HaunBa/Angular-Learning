using System.Text.Json;

namespace RoutingAPI.Controllers
{
  public class ProductService
  {
    public static List<Product>? GetProductsFromFile()
    {
      var products = JsonSerializer.Deserialize<List<Product>>(File.ReadAllText("C:\\Users\\Haunschmied.Bastian\\Documents\\GitHub\\Angular-Learning\\Routing\\RoutingAPI\\RoutingAPI\\Products.json"));
      return products;
    }
  }
}
